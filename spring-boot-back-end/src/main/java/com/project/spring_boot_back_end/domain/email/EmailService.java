package com.project.spring_boot_back_end.domain.email;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import okhttp3.*;

import java.io.IOException;

@Service
public class EmailService {
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);
    private static final String MAILTRAP_API_URL = "https://sandbox.api.mailtrap.io/api/send/";
    private static final MediaType JSON = MediaType.parse("application/json");

    @Value("${mailtrap.api.token}")
    private String apiToken;

    @Value("${mailtrap.inbox.id}")
    private String inboxId;

    private final OkHttpClient client;

    public EmailService() {
        this.client = new OkHttpClient();
    }

    /**
     * Sends a password reset email to the specified address.
     * 
     * @param email recipient's email address
     * @param token password reset token
     * @throws EmailServiceException if there's an error sending the email
     */
    public void sendResetPasswordEmail(String email, String token) throws EmailServiceException {
        validateInputs(email, token);

        String emailBody = buildEmailBody(email, token);
        Request request = buildRequest(emailBody);

        try (Response response = client.newCall(request).execute()) {
            handleResponse(response);
        } catch (IOException e) {
            logger.error("Failed to send password reset email to {}", email, e);
            throw new EmailServiceException("Failed to send password reset email", e);
        }
    }

    private void validateInputs(String email, String token) throws EmailServiceException {
        if (email == null || email.trim().isEmpty()) {
            throw new EmailServiceException("Email address cannot be null or empty");
        }
        if (token == null || token.trim().isEmpty()) {
            throw new EmailServiceException("Reset token cannot be null or empty");
        }
    }


    private String buildEmailBody(String email, String token) {
        return String.format("""
            {
                "from": {
                    "email": "no-reply@mailtrap.io",
                    "name": "Mailtrap Test"
                },
                "to": [{
                    "email": "%s"
                }],
                "subject": "Redefinição de senha",
                "html": "<!DOCTYPE html><html><head><style>body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }.email-container { max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }.header { font-size: 24px; font-weight: bold; margin-bottom: 20px; text-align: center; color: #333333; }.content { font-size: 16px; color: #666666; line-height: 1.6; }.button { display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: rgb(170, 240, 209); color: #333333; font-weight: 600; text-decoration: none; border-radius: 4px; }.footer { margin-top: 20px; font-size: 12px; color: #999999; text-align: center; }</style></head><body><div class='email-container'><div class='header'>Redefinição de Senha</div><div class='content'><p>Olá,</p><p>Você solicitou a redefinição de sua senha. Clique no botão abaixo para continuar:</p><a href='http://localhost:1234/recuperar-senha?token=%s' class='button'>Redefinir Senha</a><p>Se você não solicitou esta alteração, ignore este e-mail.</p></div><div class='footer'>Este é um e-mail automático. Por favor, não responda.</div></div></body></html>"
            }""", email, token);

            
    }

    private Request buildRequest(String emailBody) {
        return new Request.Builder()
                .url(MAILTRAP_API_URL + inboxId)
                .post(RequestBody.create(emailBody, JSON))
                .addHeader("Api-Token", apiToken)
                .addHeader("Content-Type", "application/json")
                .build();
    }

    private void handleResponse(Response response) throws EmailServiceException {
        if (!response.isSuccessful()) {
            String errorMessage = String.format("Failed to send email. Status: %d, Message: %s",
                    response.code(), response.message());
            logger.error(errorMessage);
            throw new EmailServiceException(errorMessage);
        }
        logger.info("Password reset email sent successfully");
    }
}

class EmailServiceException extends RuntimeException {
    public EmailServiceException(String message) {
        super(message);
    }

    public EmailServiceException(String message, Throwable cause) {
        super(message, cause);
    }
}