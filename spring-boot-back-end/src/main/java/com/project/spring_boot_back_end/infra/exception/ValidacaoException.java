package com.project.spring_boot_back_end.infra.exception;

public class ValidacaoException extends RuntimeException {
  public ValidacaoException(String mensagem) {
    super(mensagem);
  }
}
