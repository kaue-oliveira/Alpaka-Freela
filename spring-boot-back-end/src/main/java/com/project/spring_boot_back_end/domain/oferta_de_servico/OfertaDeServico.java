package com.project.spring_boot_back_end.domain.oferta_de_servico;

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
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;

import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.List;


@Table(name = "ofertas_de_servico")
@Entity(name = "OfertaDeServico")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class OfertaDeServico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "oferta_de_servico_id")
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT", length = 7000)
    private String descricao;

    @Column(name = "valor_cobrado", nullable = false, precision = 15, scale = 2)
    private BigDecimal valorCobrado;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @OneToMany(mappedBy = "ofertaDeServico", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Proposta> propostas = new ArrayList<>();

    @ManyToMany
    @JoinTable(
        name = "oferta_de_servico_tecnologias",
        joinColumns = @JoinColumn(name = "oferta_de_servico_id"),
        inverseJoinColumns = @JoinColumn(name = "tecnologia_id")
    )
    private List<Tecnologia> tecnologias = new ArrayList<>();

    public OfertaDeServico(DadosCadastroOfertaDeServico dados, Usuario usuario) {
        this.titulo = dados.titulo();
        this.descricao = dados.descricao();
        this.valorCobrado = dados.valorCobrado();
        this.usuario = usuario;
    }

    public void atualizarInformacoes(DadosAtualizacaoOfertaDeServico dados) {
        if (dados.titulo() != null) {
            this.titulo = dados.titulo();
        }
        if (dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if (dados.valorCobrado() != null) {
            this.valorCobrado = dados.valorCobrado();
        }
    }

    public void adicionarTecnologia(Tecnologia tecnologia) {
        this.tecnologias.add(tecnologia);
    }
}
