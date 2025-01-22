package com.project.spring_boot_back_end.infra.security;


public class PasswordResetRequest {
    private String newPassword;

    // Getters e Setters
    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}

