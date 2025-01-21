package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.math.BigDecimal;
import java.util.List;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoOfertaDeServico(
    @NotNull
    Long id,
    String titulo,
    String descricao,
    BigDecimal valorCobrado,
    List<Long> tecnologiasIds
) {}

