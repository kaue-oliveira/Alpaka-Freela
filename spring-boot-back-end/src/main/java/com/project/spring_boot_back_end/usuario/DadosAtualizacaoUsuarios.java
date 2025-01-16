package com.project.spring_boot_back_end.usuario;

import jakarta.validation.constraints.NotNull;

public record DadosAtualizacaoUsuarios(
            @NotNull
            Long id,
            String username,
            String nome,
            String email
) {}
