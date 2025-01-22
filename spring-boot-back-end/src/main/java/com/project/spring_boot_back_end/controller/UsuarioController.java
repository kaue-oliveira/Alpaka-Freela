package com.project.spring_boot_back_end.controller;

import io.swagger.v3.core.util.Json;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.project.spring_boot_back_end.domain.usuario.*;
import com.project.spring_boot_back_end.infra.exception.ValidacaoException;
import com.project.spring_boot_back_end.infra.security.SecurityFilter;
import com.project.spring_boot_back_end.infra.security.TokenService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.apache.catalina.User;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("usuario")
@SecurityRequirement(name = "bearer-key")
public class UsuarioController {

  @Autowired
  private UsuarioRepository repository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Autowired
  private TokenService tokenService;

  @PostMapping
  @Transactional
  public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroUsuario dados, UriComponentsBuilder uriBuilder)
      throws SerialException, SQLException, IOException {
    var usuario = new Usuario(dados);
    String userDirectory = Paths.get("").toAbsolutePath().toString();

    File fileImage = new File(userDirectory + "/../images/profile-image.png");
    Blob blobImage = new SerialBlob(Files.readAllBytes(fileImage.toPath()));

    usuario.setSenha(passwordEncoder.encode(dados.senha())); // Criptografando a senha
    usuario.setProfileImage(blobImage); // Imagem de perfil padrao

    repository.save(usuario);

    var uri = uriBuilder.path("/usuarios/{id}").buildAndExpand(usuario.getId()).toUri();

    return ResponseEntity.created(uri).body(new DadosDetalhamentoUsuario(usuario));
  }

  @GetMapping
  public ResponseEntity<Page<DadosListagemUsuario>> listar(
      @PageableDefault(size = 10, sort = { "nome" }) Pageable paginacao) {
    var page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemUsuario::new);
    return ResponseEntity.ok(page);
  }

  // Endpoint para atualizar os dados do usuario que realizou a request com os
  // novos dados
  @PutMapping
  public ResponseEntity<?> atualizar(UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken,
      @RequestParam(value = "image", required = false) MultipartFile file,
      @RequestParam(value = "dados") String dadosJson,
      HttpServletResponse response) throws SerialException, SQLException, IOException {

    Gson gson = new Gson();
    Usuario oldUserData = (Usuario) usernamePasswordAuthenticationToken.getPrincipal();
    DadosAtualizacaoUsuarios dados = gson.fromJson(dadosJson, DadosAtualizacaoUsuarios.class);

    if (dados.getPassword().length() >= 8 && dados.getPassword().length() <= 20) {
      dados.setPassword(passwordEncoder.encode(dados.getPassword()));
    } else {
      dados.setPassword(null);
    }

    if (file != null) {
      Blob imageBlob = new SerialBlob(file.getBytes());
      dados.setProfileImage(imageBlob);
    } else {
      dados.setProfileImage(null);
    }

    Usuario usuario = (Usuario) repository.findByUsername(oldUserData.getUsername());

    if (usuario == null) {
      return ResponseEntity.status(500).body(gson.toJson("Erro interno no servidor. Tente novamente."));
    }

    usuario.atualizarInformacoes(dados);
    repository.save(usuario);

    String base64 = null;

    // verificar se o username mudou
    if (!oldUserData.getUsername().equals(usuario.getUsername())) {
      // preciso criar e enviar um novo token ao usuario
      var tokenJWT = tokenService.gerarToken(usuario);

      // Criando um cookie que armazenará o token de autenticação
      ResponseCookie authCookie = ResponseCookie.from("auth", tokenJWT)
          .httpOnly(true)
          .secure(false)
          .path("/")
          .maxAge(2592000) // Um mês tem 720 horas, 43.200 minutos e 2.592.000 segundos
          .build();

      // Adicionando o cookie criado na resposta que sera devolvida ao frontend
      response.addHeader(HttpHeaders.SET_COOKIE, authCookie.toString());
    }

    return ResponseEntity.ok(new DadosUsuarioParaFrontend(usuario.getNome(), usuario.getUsername(), usuario.getEmail(),
        usuario.getAuthorities().toString(), usuario.getProfileImageInBase64()));
  }

  @DeleteMapping("/{id}")
  @Transactional
  public ResponseEntity excluir(@PathVariable Long id) {
    var usuario = repository.getReferenceById(id);
    usuario.excluir();

    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/excluir-conta")
  @Transactional
  public ResponseEntity<String> excluirConta(HttpServletResponse response, UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) {
    Gson gson = new Gson();
    Usuario userData = (Usuario) usernamePasswordAuthenticationToken.getPrincipal();

    if (userData == null) {
      return ResponseEntity.badRequest().body(gson.toJson("Não autorizado."));
    }

    var usuario = repository.getReferenceById(userData.getId());

    repository.delete(usuario);

    // Criando um cookie que armazenará o token de autenticação
    ResponseCookie clearAuthCookie = ResponseCookie.from("auth", "deleted")
        .httpOnly(true)
        .secure(false)
        .path("/")
        .maxAge(0)
        .build();

    response.addHeader(HttpHeaders.SET_COOKIE, clearAuthCookie.toString());

    return ResponseEntity.ok(gson.toJson("Conta deletada com sucesso. Você será redirecionado para a página principal."));
  }

  @GetMapping("/{id}")
  public ResponseEntity detalhar(@PathVariable Long id) {
    var usuario = repository.getReferenceById(id);
    return ResponseEntity.ok(new DadosDetalhamentoUsuario(usuario));
  }

}
