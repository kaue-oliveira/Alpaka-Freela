package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.math.BigDecimal;
import java.util.List;

import com.project.spring_boot_back_end.domain.habilidade.DadosListagemHabilidade;
import com.project.spring_boot_back_end.domain.tecnologia.DadosListagemTecnologia;

public record DadosListagemOfertaDeServico(
        Long id,
        String descricao,
        BigDecimal valorCobrado,
        String nomeUsuario,
        String usernameUsuario,
        List<DadosListagemTecnologia> tecnologias,
        List<DadosListagemHabilidade> habilidades,
        String profileImage) {
    public DadosListagemOfertaDeServico(OfertaDeServico oferta) {
        this(oferta.getId(),
                oferta.getDescricao(),
                oferta.getValorCobrado(),
                oferta.getUsuario().getNome(),
                oferta.getUsuario().getUsername(),
                oferta.getTecnologias().stream().map(DadosListagemTecnologia::new).toList(),
                oferta.getHabilidades().stream().map(DadosListagemHabilidade::new).toList(),
                oferta.getUsuario().getProfileImageInBase64());
    }
}
