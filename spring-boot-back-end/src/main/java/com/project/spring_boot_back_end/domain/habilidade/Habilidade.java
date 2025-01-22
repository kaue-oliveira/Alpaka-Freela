package com.project.spring_boot_back_end.domain.habilidade;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;

import java.util.ArrayList;
import java.util.List;


@Table(name = "habilidades")
@Entity(name = "Habilidade")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Habilidade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "habilidade_id")
    private Long id;

    @Column(name = "nome", length = 40, nullable = false, unique = true)
    private String nome;

    @ManyToMany(mappedBy = "habilidades")
    private List<OfertaDeServico> ofertasDeServico = new ArrayList<>();

    public Habilidade(String nome) {
        this.nome = nome;
    }
}
