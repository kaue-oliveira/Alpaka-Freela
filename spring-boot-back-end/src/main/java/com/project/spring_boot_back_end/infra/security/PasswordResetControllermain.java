package com.project.spring_boot_back_end.infra.security;



import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.usuario.UsuarioRepository;
import com.project.spring_boot_back_end.domain.email.*;
import com.project.spring_boot_back_end.infra.security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/password-reset")
public class PasswordResetControllermain {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Endpoint para solicitar redefinição de senha
    @PostMapping("/request")
    public String solicitarRedefinicaoSenha(@RequestParam String email) {
        // Busca o usuário pelo email no banco de dados
        Usuario usuario = buscarUsuarioPorEmail(email);
        if (usuario == null) {
            return "Usuário não encontrado.";
        }

        // Gerar token de redefinição
        String token = tokenService.gerarToken(usuario);

        // Enviar e-mail com o token para redefinir a senha
        emailService.sendResetPasswordEmail(email, token);

        return "E-mail de redefinição de senha enviado com sucesso!";
    }

    // Método que busca o usuário pelo email usando o repositório
    private Usuario buscarUsuarioPorEmail(String email) {
        // Busca o usuário no banco de dados
        return usuarioRepository.findByEmail(email)
                .orElse(null);  // Retorna null caso o usuário não seja encontrado
    }
    
}
