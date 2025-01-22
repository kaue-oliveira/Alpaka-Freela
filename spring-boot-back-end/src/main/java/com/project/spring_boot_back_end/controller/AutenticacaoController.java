package com.project.spring_boot_back_end.controller;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import com.google.gson.Gson;
import com.project.spring_boot_back_end.domain.email.EmailService;
import com.project.spring_boot_back_end.domain.usuario.DadosAutenticacao;
import com.project.spring_boot_back_end.domain.usuario.DadosUsuarioParaFrontend;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.usuario.UsuarioRepository;
import com.project.spring_boot_back_end.infra.exception.InvalidTokenException;
import com.project.spring_boot_back_end.infra.security.PasswordResetRequest;
import com.project.spring_boot_back_end.infra.security.PasswordResetService;
import com.project.spring_boot_back_end.infra.security.TokenService;

import java.sql.SQLException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/autenticacao")
public class AutenticacaoController {

        @Autowired
        private AuthenticationManager manager;

        @Autowired
        private TokenService tokenService;

        @Autowired
        private UsuarioRepository repository;

        @Autowired
        private EmailService emailService;

        @Autowired
        private PasswordResetService passwordResetService;

        @PostMapping("/login")
        public ResponseEntity<?> efetuarLogin(@RequestBody @Valid DadosAutenticacao dados, HttpServletResponse response)
                        throws SQLException {
                var authenticationToken = new UsernamePasswordAuthenticationToken(dados.username(), dados.senha());
                Authentication authentication = null;
                Gson gson = new Gson();

                Usuario buscarUsuario = (Usuario) repository.findByUsername(dados.username());

                if (buscarUsuario == null) {
                        return ResponseEntity.status(401).body(gson.toJson("Usuário não encontrado."));
                }

                try {
                        authentication = manager.authenticate(authenticationToken);
                } catch (AuthenticationException e) {
                        return ResponseEntity.status(401).body(gson.toJson("Senha incorreta."));
                }

                if (authentication == null)
                        return ResponseEntity.status(401).body(gson.toJson("Senha incorreta."));

                var userData = (Usuario) authentication.getPrincipal();

                // Criando token de autenticacao
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

                // Enviando alguns dados do novo usuário autenticado ao frontend
                return ResponseEntity.ok(new DadosUsuarioParaFrontend(userData.getNome(), userData.getUsername(),
                                userData.getEmail(), userData.getAuthorities().toString(),
                                userData.getProfileImageInBase64()));
        }

        @PostMapping("/logoff")
        public ResponseEntity<String> efetuarLogoff(HttpServletResponse response) {
                Gson gson = new Gson();

                // Criando um cookie que armazenará o token de autenticação
                ResponseCookie clearAuthCookie = ResponseCookie.from("auth", "deleted")
                                .httpOnly(true)
                                .secure(false)
                                .path("/")
                                .maxAge(0)
                                .build();

                response.addHeader(HttpHeaders.SET_COOKIE, clearAuthCookie.toString());
                return ResponseEntity.ok(gson.toJson("Usuário deslogado com sucesso."));
        }

        // Endpoint para solicitar o envio de um e-mail de redefinição de senha
        @PostMapping("/redefinir-senha-gerar-email")
        public ResponseEntity<String> redefinirSenha(@RequestParam(value = "email") String email) {
                // Verificar se o usuário existe
                Optional<Usuario> usuarioOptional = repository.findByEmail(email);

                if (usuarioOptional.isEmpty()) {
                        return ResponseEntity.badRequest().body("Usuário não encontrado com o e-mail fornecido.");
                }

                Usuario usuario = usuarioOptional.get(); 

                // Verificar se o usuario eh um administrador
                for (GrantedAuthority grantedAuthority : usuario.getAuthorities())
                        if (grantedAuthority.toString().equals("ROLE_ADMIN"))
                                return ResponseEntity.badRequest().body(
                                                "A redefinição de senha não é permitida para usuários aministradores.");

                // Gerar token para redefinição de senha
                String token = tokenService.gerarToken(usuario);

                // Enviar o e-mail
                emailService.sendResetPasswordEmail(email, token);

                return ResponseEntity.ok("E-mail de redefinição de senha enviado.");
        }

        @PostMapping("/redefinir-senha")
        public ResponseEntity<?> resetPassword(
                        @RequestParam String token,
                        @RequestBody PasswordResetRequest request) throws InvalidTokenException {
                try {
                        passwordResetService.resetPassword(token, request.getNewPassword());
                        return ResponseEntity.ok().body("Senha atualizada com sucesso");
                } catch (InvalidTokenException e) {
                        return ResponseEntity.badRequest().body("Token inválido ou expirado");
                } catch (Exception e) {
                        return ResponseEntity.internalServerError().body("Erro ao redefinir senha");
                }
        }

}
