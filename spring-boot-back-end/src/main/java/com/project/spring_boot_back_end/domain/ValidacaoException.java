package com.project.spring_boot_back_end.domain;

public class ValidacaoException extends RuntimeException {
  public ValidacaoException(String mensagem) {
    super(mensagem);
  }
}
