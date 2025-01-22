package com.project.spring_boot_back_end.domain.usuario;


public record DadosDetalhamentoUsuario(Long id, String nome, String email, String username) {

  public DadosDetalhamentoUsuario(Usuario usuario) {
      this(usuario.getId(), usuario.getNome(), usuario.getEmail(), usuario.getUsername());
  }
}
