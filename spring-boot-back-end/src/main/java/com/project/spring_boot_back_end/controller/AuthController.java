package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.email.EmailService;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.usuario.UsuarioRepository;
import com.project.spring_boot_back_end.infra.security.TokenService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private EmailService emailService;

    // Endpoint para solicitar o envio de um e-mail de redefinição de senha
    @PostMapping("/redefinir-senha")
    public ResponseEntity<String> redefinirSenha(@RequestParam(value = "email") String email) {
        // Verificar se o usuário existe
        Optional<Usuario> usuarioOptional = usuarioRepository.findByEmail(email);

        if (usuarioOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Usuário não encontrado com o e-mail fornecido.");
        }

        Usuario usuario = usuarioOptional.get();

        // Verificar se o usuario eh um administrador
        for (GrantedAuthority grantedAuthority : usuario.getAuthorities()) 
            if (grantedAuthority.toString().equals("ROLE_ADMIN"))
                return ResponseEntity.badRequest().body("A redefinição de senha não é permitida para usuários aministradores.");

        // Gerar token para redefinição de senha
        String token = tokenService.gerarToken(usuario);

        // Enviar o e-mail
        emailService.sendResetPasswordEmail(email, token);

        return ResponseEntity.ok("E-mail de redefinição de senha enviado.");
    }
}
