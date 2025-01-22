package com.project.spring_boot_back_end.domain.proposta;

import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.usuario.Usuario;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Table(name = "propostas")
@Entity(name = "Proposta")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Proposta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proposta_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "autor_proposta_id", nullable = false)
    private Usuario usuario;

    @Column(name = "descricao", length = 7000, nullable = false)
    private String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_proposta", nullable = false)
    private TipoProposta tipoProposta;

    @ManyToOne
    @JoinColumn(name = "oferta_de_servico_id")
    private OfertaDeServico ofertaDeServico;

    @ManyToOne
    @JoinColumn(name = "oferta_de_trabalho_id")
    private OfertaDeTrabalho ofertaDeTrabalho;

    public Proposta(DadosCadastroProposta dados, Usuario usuario) {
        this.descricao = dados.descricao();
        this.tipoProposta = dados.tipoProposta();
        this.usuario = usuario;
    }

    public void setOfertaDeServico(OfertaDeServico ofertaDeServico) {
        this.ofertaDeServico = ofertaDeServico;
    }

    public void setOfertaDeTrabalho(OfertaDeTrabalho ofertaDeTrabalho) {
        this.ofertaDeTrabalho = ofertaDeTrabalho;
    }
}
