import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Images from "../fixed/images";

const PasswordRecoverForm = ({ onSubmit }) => {
    const [incorrectPassword, setIncorrectPassword] = useState("");
    const [passwordNotEquals, setPasswordNotEquals] = useState("");
    const backendDomain = process.env.BACKEND_DOMAIN;
    const location = useLocation();

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        const params = new URLSearchParams(location.search); // Obtem os parâmetros de consulta da URL
        let canSubmitForm = true;
        let token = params.get('token');

        if (!token) {
            onSubmit("Você precisa de um token válido para redefinir sua senha.");
            return;
        }

        const formData = {
            password1: event.target.password1.value,
            password2: event.target.password2.value,
        }

        if (formData.password1.length < 8 || formData.password1.length > 20) {
            setIncorrectPassword("Sua nova senha deve possuir entre 8 e 20 caracteres.");
            canSubmitForm = false;
        }

        if (formData.password1 !== formData.password2) {
            setPasswordNotEquals("Senhas não coincidem.");
            canSubmitForm = false;
        }

        if (canSubmitForm) {
            // const newPassword = formData.password1;
            const data = {
                newPassword: formData.password1
            }

            try {
                const response = await fetch(backendDomain + `/autenticacao/redefinir-senha?token=${encodeURIComponent(token)}`, {
                    method: 'POST',
                    credentials: "include", // Permite envio/recebimento de cookies
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.text(); // Aqui o back-end retorna uma String
                console.log(result);
                onSubmit(result);
            } catch (error) {
                console.log("error -> " + error.message);
                onSubmit(error.message);
            }
        }
    }

    const handleChangeForm = () => {
        setIncorrectPassword("");
        setPasswordNotEquals("");
    }


    return (
        <div style={{ width: "50%" }}>
            <div
                style={{
                    width: "100%",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid black",
                    boxShadow: "15px 15px 0px 0px rgba(212, 212, 212, 0.5)"
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Recuperação de senha
                </h1>
                <form style={{ width: "100%" }} onSubmit={handleSubmitForm} onChange={handleChangeForm}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira sua nova senha
                    </label>
                    <input
                        type="password"
                        name="password1"
                        placeholder="Senha"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "15px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                        }}
                    />
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "15px", height: "15px" }}>
                        {incorrectPassword}
                    </div>

                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Repita sua nova senha
                    </label>
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password2"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "15px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                        }}
                    />
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "15px", height: "15px" }}>
                        {passwordNotEquals}
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            height: "70px",
                            padding: "10px",
                            backgroundColor: "#aaf0d1",
                            color: "#000",
                            fontSize: "25px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "normal",
                            textAlign: "start",
                            paddingLeft: "15px",
                            boxShadow: "5px 5px 0px 0px rgba(212, 212, 212, 0.5)" 
                        }}
                    >
                        Confirmar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordRecoverForm;
