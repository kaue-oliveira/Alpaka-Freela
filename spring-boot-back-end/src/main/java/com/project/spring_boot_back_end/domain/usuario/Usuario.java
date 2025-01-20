package com.project.spring_boot_back_end.domain.usuario;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Blob;
import java.util.Collection;
import java.util.List;

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

/*
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OfertaDeTrabalho> ofertasDeTrabalho = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OfertaDeServico> ofertasDeServico = new ArrayList<>();

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Proposta> propostas = new ArrayList<>();
*/

    public Usuario(DadosCadastroUsuario dados) {
        this.ativo = true;
        this.nome = dados.nome();
        this.email = dados.email();
        this.username = dados.username();
        this.senha = dados.senha();
        this.grantedAuthority = new SimpleGrantedAuthority("ROLE_ADMIN");
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

    //
    // Getters e Setters
    //

    public Blob getProfileImage() {
        return profileImage;
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


