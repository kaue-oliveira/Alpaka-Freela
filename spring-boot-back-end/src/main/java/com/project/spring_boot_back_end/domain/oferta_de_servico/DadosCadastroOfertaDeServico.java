package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.*;

public record DadosCadastroOfertaDeServico(
    @NotBlank
    String titulo,

    @NotBlank
    @jakarta.validation.constraints.Size(max = 7000)
    String descricao,

    @NotNull
    @jakarta.validation.constraints.Positive
    java.math.BigDecimal valorCobrado,

    List<Long> tecnologiasIds
) {}
