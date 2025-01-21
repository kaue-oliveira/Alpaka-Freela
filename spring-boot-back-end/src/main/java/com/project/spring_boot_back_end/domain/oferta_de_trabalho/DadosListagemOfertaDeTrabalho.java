package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import java.math.BigDecimal;
import java.util.List;

import com.project.spring_boot_back_end.domain.tecnologia.DadosListagemTecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
public record DadosListagemOfertaDeTrabalho(
    Long id,
    String titulo,
    String descricao,
    BigDecimal pagamento,
    Usuario usuario,
    List<Tecnologia> tecnologias
) {
    public DadosListagemOfertaDeTrabalho(OfertaDeTrabalho oferta) {
        this(oferta.getId(),
             oferta.getTitulo(),
             oferta.getDescricao(),
             oferta.getPagamento(),
             oferta.getUsuario(),
             oferta.getTecnologias());
    }

  public DadosListagemOfertaDeTrabalho(Object ofertaDeTrabalho) {
      this(null, null, null, null, null, null);
      //TODO Auto-generated constructor stub
  }
}
