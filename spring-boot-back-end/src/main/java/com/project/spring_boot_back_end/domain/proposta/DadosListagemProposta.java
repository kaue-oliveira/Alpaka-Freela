package com.project.spring_boot_back_end.domain.proposta;

import com.project.spring_boot_back_end.domain.usuario.DadosUsuarioParaFrontend;

public record DadosListagemProposta(Long id, String descricao, TipoProposta tipoProposta, DadosUsuarioParaFrontend dadosRecebedor) {
    public DadosListagemProposta(Proposta proposta) {
        this(proposta.getId(), proposta.getDescricao(), proposta.getTipoProposta(), new DadosUsuarioParaFrontend(proposta.getUsuario().getId(), proposta.getUsuario().getNome(), proposta.getUsuario().getUsername(), proposta.getUsuario().getEmail(), proposta.getUsuario().getGrantedAuthority().toString(), proposta.getUsuario().getProfileImageInBase64()));
    }
}

