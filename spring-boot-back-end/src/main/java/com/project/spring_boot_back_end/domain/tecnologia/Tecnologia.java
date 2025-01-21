package com.project.spring_boot_back_end.domain.tecnologia;

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
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;

import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.List;


@Table(name = "tecnologias")
@Entity(name = "Tecnologia")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Tecnologia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tecnologia_id")
    private Long id;

    @Column(name = "nome", length = 40, nullable = false, unique = true)
    private String nome;

    @ManyToMany(mappedBy = "tecnologias")
    private List<OfertaDeTrabalho> ofertasDeTrabalho = new ArrayList<>();

    @ManyToMany(mappedBy = "tecnologias")
    private List<OfertaDeServico> ofertasDeServico = new ArrayList<>();

    public Tecnologia(String nome) {
        this.nome = nome;
    }
}
