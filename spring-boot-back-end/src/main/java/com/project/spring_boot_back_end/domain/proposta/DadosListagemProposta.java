package com.project.spring_boot_back_end.domain.proposta;

import com.project.spring_boot_back_end.domain.usuario.Usuario;

public record DadosListagemProposta(
    Long id,
    String descricao,
    Double valor,
    String mensagem,
    TipoProposta tipoProposta,
    Usuario usuario,
    Long ofertaId,
    String ofertaTitulo
) {
    public DadosListagemProposta(Proposta proposta) {
        this(proposta.getId(),
             proposta.getDescricao(),
             proposta.getValor(),
             proposta.getMensagem(),
             proposta.getTipoProposta(),
             proposta.getUsuario(),
             proposta.getTipoProposta() == TipoProposta.SERVICO ? 
                proposta.getOfertaDeServico().getId() : 
                proposta.getOfertaDeTrabalho().getId(),
             proposta.getTipoProposta() == TipoProposta.SERVICO ? 
                proposta.getOfertaDeServico().getTitulo() : 
                proposta.getOfertaDeTrabalho().getTitulo());
    }}

