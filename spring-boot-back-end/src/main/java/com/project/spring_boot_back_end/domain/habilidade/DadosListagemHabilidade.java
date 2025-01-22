package com.project.spring_boot_back_end.domain.habilidade;

public record DadosListagemHabilidade(
    Long id,
    String nome
) {
    public DadosListagemHabilidade(Habilidade habilidade) {
        this(habilidade.getId(), habilidade.getNome());
    }
}
