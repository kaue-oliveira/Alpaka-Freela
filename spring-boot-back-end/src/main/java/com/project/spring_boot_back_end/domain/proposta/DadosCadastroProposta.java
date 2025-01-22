package com.project.spring_boot_back_end.domain.proposta;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record DadosCadastroProposta(
    @NotBlank
    @Size(max = 7000)
    String descricao,

    @NotNull
    TipoProposta tipoProposta,

    @NotNull
    Long ofertaId
) {}

