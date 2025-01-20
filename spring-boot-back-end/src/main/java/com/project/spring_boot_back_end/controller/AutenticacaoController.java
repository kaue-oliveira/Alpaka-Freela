package com.project.spring_boot_back_end.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import com.project.spring_boot_back_end.domain.usuario.DadosAutenticacao;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.infra.security.TokenService;
import com.project.spring_boot_back_end.models.DadosTokenJWT;
import com.project.spring_boot_back_end.models.DadosUsuarioParaFrontend;

import java.sql.SQLException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutenticacao dados, HttpServletResponse response)
            throws SQLException {
        var authenticationToken = new UsernamePasswordAuthenticationToken(dados.username(), dados.senha());
        var authentication = manager.authenticate(authenticationToken);
        var userData = (Usuario) authentication.getPrincipal();

        var tokenJWT = tokenService.gerarToken(userData);

        // Criando um cookie que armazenará o token de autenticação
        ResponseCookie authCookie = ResponseCookie.from("auth", tokenJWT)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(2592000) // Um mês tem 720 horas, 43.200 minutos e 2.592.000 segundos
                .build();

        // Adicionando o cookie criado na resposta que sera devolvida ao frontend
        response.addHeader(HttpHeaders.SET_COOKIE, authCookie.toString());

        String base64 = "aaa";

        if (userData.getProfileImage() != null) {
            base64 = Base64.getEncoder()
                    .encodeToString(userData.getProfileImage().getBytes(1, (int) userData.getProfileImage().length()));
        }

        // Enviando alguns dados do novo usuário autenticado ao frontend
        return ResponseEntity.ok(new DadosUsuarioParaFrontend(userData.getNome(), userData.getUsername(),
                userData.getEmail(), userData.getAuthorities().toString(), base64));
    }

    @PostMapping("/logoff")
    public ResponseEntity<String> efetuarLogoff(HttpServletResponse response) {
        // Criando um cookie que armazenará o token de autenticação
        ResponseCookie clearAuthCookie = ResponseCookie.from("auth", "deleted")
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(0) 
                .build();

        response.addHeader(HttpHeaders.SET_COOKIE, clearAuthCookie.toString());
        return ResponseEntity.ok("Usuário deslogado com sucesso.");
    }

}
