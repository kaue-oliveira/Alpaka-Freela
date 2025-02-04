package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import java.math.BigDecimal;

public record DadosListagemOfertaDeTrabalho(
    Long id,
    String titulo,
    String descricao,
    BigDecimal pagamento,
    String nomeUsuario,
    String usernameUsuario,
    // List<DadosListagemTecnologia> tecnologias,
    String profileImage
) {
    public DadosListagemOfertaDeTrabalho(OfertaDeTrabalho oferta) {
        this(oferta.getId(),
             oferta.getTitulo(),
             oferta.getDescricao(),
             oferta.getPagamento(),
             oferta.getUsuario().getNome(),
             oferta.getUsuario().getUsername(),
            //  oferta.getTecnologias().stream().map(DadosListagemTecnologia::new).toList(),
             oferta.getUsuario().getProfileImageInBase64());
    }
}
