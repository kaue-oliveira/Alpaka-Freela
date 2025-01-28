package com.project.spring_boot_back_end.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.usuario.UsuarioRepository;
import com.project.spring_boot_back_end.infra.exception.InvalidTokenException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

@Service
public class PasswordResetService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Value("${api.security.token.secret}")
    private String secret;

    public void resetPassword(String token, String newPassword) throws InvalidTokenException {
        try {
            // Decodifica e valida o token
            DecodedJWT jwt = JWT.require(Algorithm.HMAC256(secret))
                    .withIssuer("API Voll.med")
                    .build()
                    .verify(token);

            // Extrai o username do token (subject)
            String username = jwt.getSubject();

            // Busca o usuário pelo username
            Usuario usuario = (Usuario) usuarioRepository.findByUsername(username);

            if (usuario == null) {
                throw new RuntimeException("Usuário não encontrado");
            }

            // Atualiza a senha
            usuario.setSenha(passwordEncoder.encode(newPassword));
            usuarioRepository.save(usuario);
        } catch (Exception e) {
            throw new InvalidTokenException("Token inválido ou expirado");
        }
    }
}