package com.project.spring_boot_back_end.domain.oferta_de_servico;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import com.project.spring_boot_back_end.domain.habilidade.Habilidade;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.proposta.Proposta;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Iterator;
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

    @ManyToMany
    @JoinTable(
        name = "oferta_de_servico_habilidades",
        joinColumns = @JoinColumn(name = "oferta_de_servico_id"),
        inverseJoinColumns = @JoinColumn(name = "habilidade_id")
    )
    private List<Habilidade> habilidades = new ArrayList<>();

    public OfertaDeServico(DadosCadastroOfertaDeServico dados, Usuario usuario) {
        this.descricao = dados.descricao();
        this.valorCobrado = dados.valorCobrado();
        this.usuario = usuario;
    }

    public void atualizarInformacoes(DadosAtualizacaoOfertaDeServico dados) {
        if (dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if (dados.valorCobrado() != null) {
            this.valorCobrado = dados.valorCobrado();
        }
    }

    public boolean contemTecnologia(Tecnologia tecnologia) {
        for (Tecnologia t : tecnologias) {
            if (t.getNome().equals(tecnologia.getNome())) {
                return true;
            }
        }

        return false;
    }

    public void removerTecnologia(Tecnologia tecnologia) {
        Iterator<Tecnologia> iterator = tecnologias.iterator();

        while (iterator.hasNext()) {
            Tecnologia t = iterator.next();

            if (t.getNome().equals(tecnologia.getNome())) {
                iterator.remove();
                return;
            }
        }
    }

    public void adicionarTecnologia(Tecnologia tecnologia) {
        this.tecnologias.add(tecnologia);
    }

    public boolean contemHabilidade(Habilidade habilidade) {
        for (Habilidade h : habilidades) {
            if (h.getNome().equals(habilidade.getNome())) {
                return true;
            }
        }

        return false;
    }

    public void removerHabilidade(Habilidade habilidade) {
        Iterator<Habilidade> iterator = habilidades.iterator();

        while (iterator.hasNext()) {
            Habilidade h = iterator.next();

            if (h.getNome().equals(habilidade)) {
                iterator.remove();
            }
        }
    }

    public void adicionarHabilidade(Habilidade habilidade) {
        this.habilidades.add(habilidade);
    }

    public void setTecnologias(List<Tecnologia> tecnologias) {
        this.tecnologias = tecnologias;
    }

    public void setHabilidades(List<Habilidade> habilidades) {
        this.habilidades = habilidades;
    }
}
