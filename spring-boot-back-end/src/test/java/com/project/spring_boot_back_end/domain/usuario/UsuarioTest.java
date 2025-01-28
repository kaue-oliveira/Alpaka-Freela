package com.project.spring_boot_back_end.domain.usuario;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.sql.Blob;
import java.sql.SQLException;
import javax.sql.rowset.serial.SerialBlob;
import java.util.Base64;

class UsuarioTest {
    private Usuario usuario;
    private DadosCadastroUsuario dadosCadastro;

    @BeforeEach
    void setUp() {
        dadosCadastro = new DadosCadastroUsuario(
            "Usuário de Teste",
            "teste@exemplo.com",
            "testeusuario",
            "senha123"
        );
        usuario = new Usuario(dadosCadastro);
        System.out.println("Configuração concluída: Usuário de teste criado com nome: " + usuario.getNome());
    }


    @Test
    void testExcluir() {
        System.out.println("Testando exclusão do usuário...");
        assertTrue(usuario.getAtivo());
        usuario.excluir();
        assertFalse(usuario.getAtivo());
        System.out.println("Teste de exclusão do usuário concluído com sucesso");
    }

    @Test
    void testProfileImageHandling() throws SQLException {
        System.out.println("Testando o gerenciamento da imagem de perfil...");
        byte[] imageBytes = "conteúdo da imagem de teste".getBytes();
        Blob blob = new SerialBlob(imageBytes);
        usuario.setProfileImage(blob);
        assertEquals(blob, usuario.getProfileImage());
        String base64Image = usuario.getProfileImageInBase64();
        assertTrue(base64Image.startsWith("data:image/jpeg;base64,"));
        System.out.println("Teste de gerenciamento da imagem de perfil concluído com sucesso");
    }

    @Test
    void testUserDetailsImplementation() {
        System.out.println("Testando a implementação do UserDetails...");
        assertTrue(usuario.isAccountNonExpired());
        assertTrue(usuario.isAccountNonLocked());
        assertTrue(usuario.isCredentialsNonExpired());
        assertTrue(usuario.isEnabled());
        System.out.println("Teste de implementação do UserDetails concluído com sucesso");
    }

    @Test
    void testAuthorities() {
        System.out.println("Testando as autoridades do usuário...");
        var authorities = usuario.getAuthorities();
        assertEquals(1, authorities.size());
        assertTrue(authorities.contains(new SimpleGrantedAuthority("ROLE_USER")));
        System.out.println("Teste das autoridades do usuário concluído com sucesso");
    }

    @Test
    void testAtualizarInformacoesWithNullValues() {
        System.out.println("Testando atualização com valores nulos...");
        String originalName = usuario.getNome();
        String originalEmail = usuario.getEmail();
        String originalUsername = usuario.getUsername();
        String originalPassword = usuario.getPassword();

        DadosAtualizacaoUsuarios dadosAtualizacao = new DadosAtualizacaoUsuarios(null, null, null, null, null);
        usuario.atualizarInformacoes(dadosAtualizacao);

        assertEquals(originalName, usuario.getNome());
        assertEquals(originalEmail, usuario.getEmail());
        assertEquals(originalUsername, usuario.getUsername());
        assertEquals(originalPassword, usuario.getPassword());
        System.out.println("Teste de atualização com valores nulos concluído com sucesso");
    }
}
