package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroOfertaDeServico(
    @NotBlank
    @jakarta.validation.constraints.Size(min = 100, max = 7000)
    String descricao,

    @NotNull
    @jakarta.validation.constraints.Positive
    java.math.BigDecimal valorCobrado,

    List<Long> tecnologiasIds,

    List<Long> habilidadesIds
) {}
