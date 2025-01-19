package com.project.spring_boot_back_end.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import com.project.spring_boot_back_end.domain.usuario.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("usuario")
@SecurityRequirement(name = "bearer-key")
public class UsuarioController {

  @Autowired
  private UsuarioRepository repository;
  @Autowired
  private PasswordEncoder passwordEncoder;

 @PostMapping
@Transactional
public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroUsuario dados, UriComponentsBuilder uriBuilder) {
    var usuario = new Usuario(dados);
    usuario.setSenha(passwordEncoder.encode(dados.senha()));  // Criptografando a senha
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

  @PutMapping
  @Transactional
  public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoUsuarios dados) {
    var usuario = repository.getReferenceById(dados.id());
    usuario.atualizarInformacoes(dados);

    return ResponseEntity.ok(new DadosDetalhamentoUsuario(usuario));
  }

  @DeleteMapping("/{id}")
  @Transactional
  public ResponseEntity excluir(@PathVariable Long id) {
    var usuario = repository.getReferenceById(id);
    usuario.excluir();

    return ResponseEntity.noContent().build();
  }

  @GetMapping("/{id}")
  public ResponseEntity detalhar(@PathVariable Long id) {
    var usuario = repository.getReferenceById(id);
    return ResponseEntity.ok(new DadosDetalhamentoUsuario(usuario));
  }

}
