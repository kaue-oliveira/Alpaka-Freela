package com.project.spring_boot_back_end.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import com.project.spring_boot_back_end.infra.exception.InvalidTokenException;
import com.project.spring_boot_back_end.infra.security.PasswordResetRequest;
import com.project.spring_boot_back_end.infra.security.PasswordResetService;
@RestController
@RequestMapping("/reset-password")
@CrossOrigin(origins = "*")
public class PasswordResetController {

    @Autowired
    private PasswordResetService passwordResetService;

    @PostMapping
    public ResponseEntity<?> resetPassword(
            @RequestParam String token,
            @RequestBody PasswordResetRequest request) throws InvalidTokenException {
        try {
            passwordResetService.resetPassword(token, request.getNewPassword());
            return ResponseEntity.ok().body("Senha atualizada com sucesso");
        } catch (InvalidTokenException e) {
            return ResponseEntity.badRequest().body("Token inválido ou expirado");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Erro ao redefinir senha");
        }
    }
}
