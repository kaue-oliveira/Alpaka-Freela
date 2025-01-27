package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoOfertaDeTrabalho(
    @NotNull
    Long id,
    String titulo,
    String descricao,
    BigDecimal pagamento
    // List<Long> tecnologiasIds
) {}
