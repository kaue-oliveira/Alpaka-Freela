package com.project.spring_boot_back_end.models;

import java.util.Base64;

public record DadosUsuarioParaFrontend(String name, String username, String email, String role, String profileImage) {
    
}
