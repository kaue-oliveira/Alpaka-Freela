package com.project.spring_boot_back_end.domain.proposta;

import com.project.spring_boot_back_end.domain.usuario.Usuario;

public record DadosListagemProposta(Long id, String descricao, TipoProposta tipoProposta, Usuario usuario) {
    public DadosListagemProposta(Proposta proposta) {
        this(proposta.getId(), proposta.getDescricao(), proposta.getTipoProposta(), proposta.getUsuario());
    }
}

