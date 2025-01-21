package com.project.spring_boot_back_end.domain.tecnologia;

public record DadosListagemTecnologia(
    Long id,
    String nome
) {
    public DadosListagemTecnologia(Tecnologia tecnologia) {
        this(tecnologia.getId(), tecnologia.getNome());
    }
}
