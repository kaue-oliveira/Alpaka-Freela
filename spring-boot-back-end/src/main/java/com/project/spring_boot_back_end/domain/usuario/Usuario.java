package com.project.spring_boot_back_end.domain.usuario;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.proposta.Proposta;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.List;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

@Table(name = "usuarios")
@Entity(name = "Usuario")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String username;

    private Boolean ativo;

    private GrantedAuthority grantedAuthority;

    @Lob
    private Blob profileImage;


    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OfertaDeTrabalho> ofertasDeTrabalho = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OfertaDeServico> ofertasDeServico = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Proposta> propostas = new ArrayList<>();

    // Construtor para criar um usuário normal
    public Usuario(DadosCadastroUsuario dados) {
        this.ativo = true;
        this.nome = dados.nome();
        this.email = dados.email();
        this.username = dados.username();
        this.senha = dados.senha();
        this.grantedAuthority = new SimpleGrantedAuthority("ROLE_USER");
        setDefaultImage();
    }

    // Construtor para criar um usuário com uma role em especifico
    public Usuario(DadosCadastroUsuario dados, String role) {
        this.ativo = true;
        this.nome = dados.nome();
        this.email = dados.email();
        this.username = dados.username();
        this.senha = dados.senha();
        this.grantedAuthority = new SimpleGrantedAuthority(role);
        setDefaultImage();
    }

    public void atualizarInformacoes(DadosAtualizacaoUsuarios dados) {
        if (dados.getNome() != null) 
            this.nome = dados.getNome();

        if (dados.getEmail() != null) 
            this.email = dados.getEmail();

        if (dados.getUsername() != null) 
            this.username = dados.getUsername();
        
        if (dados.getPassword() != null) 
            this.senha = dados.getPassword();
        
        if (dados.getProfileImage() != null) 
            this.profileImage = dados.getProfileImage();
    }

    public void excluir() {
        this.ativo = false;
    }

    private void setDefaultImage() {
        String userDirectory = Paths.get("").toAbsolutePath().toString();
        File fileImage = new File(userDirectory + "/../images/profile-image.png");
        Blob blobImage = null;
        
        try {
            blobImage = new SerialBlob(Files.readAllBytes(fileImage.toPath()));
        } catch (SerialException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (blobImage != null)
            profileImage = blobImage;
    }

    //
    // Getters e Setters
    //

    public Blob getProfileImage() {
        return profileImage;
    }

    public String getProfileImageInBase64() {
        try {
            return "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(profileImage.getBytes(1, (int) profileImage.length()));
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return "";
    }

    public void setProfileImage(Blob profileImage) {
        this.profileImage = profileImage;
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(this.grantedAuthority);
    }

    public void setSenha(String encode) {
      this.senha = encode;
    }

   
}


