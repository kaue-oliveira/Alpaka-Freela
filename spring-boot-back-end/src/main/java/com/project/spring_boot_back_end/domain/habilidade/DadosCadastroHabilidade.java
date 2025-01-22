package com.project.spring_boot_back_end.domain.habilidade;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record DadosCadastroHabilidade(
    @NotBlank
    @Size(max = 40)
    String nome
) {}
