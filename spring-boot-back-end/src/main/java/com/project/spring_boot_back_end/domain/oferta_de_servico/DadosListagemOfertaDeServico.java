package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.math.BigDecimal;
import java.util.List;

import com.project.spring_boot_back_end.domain.tecnologia.DadosListagemTecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
import com.project.spring_boot_back_end.domain.usuario.DadosDetalhamentoUsuario;
import com.project.spring_boot_back_end.domain.usuario.Usuario;

public record DadosListagemOfertaDeServico(
    Long id,
    String titulo,
    String descricao,
    BigDecimal valorCobrado,
    Usuario usuario,
    List<DadosListagemTecnologia> tecnologias
) {
    public DadosListagemOfertaDeServico(OfertaDeServico oferta) {
        this(oferta.getId(),
             oferta.getTitulo(),
             oferta.getDescricao(),
             oferta.getValorCobrado(),
             oferta.getUsuario(),
             oferta.getTecnologias().stream().map(DadosListagemTecnologia::new).toList());
    }
}

