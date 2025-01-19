package com.project.spring_boot_back_end.domain.usuario;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


public record DadosCadastroUsuario(
    @NotBlank
    @Email
    String email,

    @NotBlank
    String senha,

    @NotBlank
    String nome,

    @NotBlank
    String username
) {}
