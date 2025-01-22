package com.project.spring_boot_back_end.domain.tecnologia;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record DadosCadastroTecnologia(
    @NotBlank
    @Size(max = 40)
    String nome
) {}
