package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import java.math.BigDecimal;
import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record DadosCadastroOfertaDeTrabalho(
    @NotBlank
    @Size(max = 100)
    String titulo,

    @NotBlank
    @Size(max = 7000)
    String descricao,

    @NotNull
    @Positive
    BigDecimal pagamento,

    List<Long> tecnologiasIds
) {}

