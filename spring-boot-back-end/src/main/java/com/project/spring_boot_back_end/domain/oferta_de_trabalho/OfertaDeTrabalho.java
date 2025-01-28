package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.proposta.Proposta;
import com.project.spring_boot_back_end.domain.usuario.Usuario;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
@Table(name = "ofertas_de_trabalho")
@Entity(name = "OfertaDeTrabalho")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class OfertaDeTrabalho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "oferta_de_trabalho_id")
    private Long id;

    @Column(nullable = false, length = 100)
    private String titulo;

    @Column(columnDefinition = "TEXT", length = 7000)
    private String descricao;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal pagamento;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @OneToMany(mappedBy = "ofertaDeTrabalho", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Proposta> propostas = new ArrayList<>();

    // @ManyToMany
    // @JoinTable(
    //     name = "oferta_de_trabalho_tecnologias",
    //     joinColumns = @JoinColumn(name = "oferta_de_trabalho_id"),
    //     inverseJoinColumns = @JoinColumn(name = "tecnologia_id")
    // )
    // private List<Tecnologia> tecnologias = new ArrayList<>();

    public OfertaDeTrabalho(DadosCadastroOfertaDeTrabalho dados, Usuario usuario) {
        this.titulo = dados.titulo();
        this.descricao = dados.descricao();
        this.pagamento = dados.pagamento();
        this.usuario = usuario;
    }

    public void atualizarInformacoes(DadosAtualizacaoOfertaDeTrabalho dados) {
        if (dados.titulo() != null) {
            this.titulo = dados.titulo();
        }
        if (dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if (dados.pagamento() != null) {
            this.pagamento = dados.pagamento();
        }
    }

    // public void adicionarTecnologia(Tecnologia tecnologia) {
    //     this.tecnologias.add(tecnologia);
    // }

    // public void setTecnologias(List<Tecnologia> tecnologias) {
    //     this.tecnologias = tecnologias;
    // }
    
    
}
