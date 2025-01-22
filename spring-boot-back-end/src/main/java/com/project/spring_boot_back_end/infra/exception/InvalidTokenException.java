package com.project.spring_boot_back_end.infra.exception;


public class InvalidTokenException extends Exception {
    public InvalidTokenException(String message) {
        super(message);
    }
}