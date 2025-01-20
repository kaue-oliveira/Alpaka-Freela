import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import Images from "../fixed/images";
    const LoginForm = ({ onSubmit }) => {
    const [incorrectUsername, setIncorrectUsername] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState("");
    const { auth, setAuth, userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        let readyForSubmitForm = true;

        const formData = {
            username: event.target.username.value.trim(),
            password: event.target.password.value,
        }


        if (!formData.username || formData.username.length === 0) {
            setIncorrectUsername("Informe seu username.");
            readyForSubmitForm = false;
        }

        if (!formData.password) {
            setIncorrectPassword("Informe sua senha.");
            readyForSubmitForm = false;
        }

        if (readyForSubmitForm) {
            const data = {
                username: formData.username,
                senha: formData.password,
            }

            try {
                const response = await fetch('http://localhost:8080/login', {
                    method: 'POST',
                    credentials: "include", // Permite envio/recebimento de cookies
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (result.name && result.username && result.email && result.role) {
                    setAuth(true);
                    setUserData(result);
                    navigate("/dashboard")
                }

                // mensagem
                onSubmit(JSON.stringify(result));


            } catch (error) {
                console.log("mensagem de erro: " + error.message);
                onSubmit(error.message);
            }
        }
    }

    const handleChangeForm = () => {
        setIncorrectPassword("");
        setIncorrectUsername("");
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
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Entrar na plataforma
                </h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src={Images.alpakaAstronaltCloud}
                        alt="Avatar"
                        style={{ borderRadius: "50%" }}
                    />
                </div>
                <form style={{ width: "100%" }} onSubmit={handleSubmitForm} onChange={handleChangeForm}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira seu username
                    </label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "5px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                        }}
                    />
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                        {incorrectUsername}
                    </div>

                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira sua senha
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Senha"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "5px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "14px",
                            boxSizing: "border-box",
                        }}
                    />
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "20px", height: "15px" }}>
                        {incorrectPassword}
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "20px",
                            backgroundColor: "#aaf0d1",
                            color: "#000",
                            fontSize: "20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "600",
                            textAlign: "start",
                            paddingLeft: "15px",
                        }}
                    >
                        Entrar
                    </button>
                </form>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <a
                        href="/registrar"
                        style={{
                            marginTop: "2%",
                            padding: "12px",
                            borderRadius: "5px",
                            textDecoration: "none",
                            color: "#000000",
                            backgroundColor: "#fff",
                            fontSize: "14px",
                        }}
                    >
                        Não possui uma conta? Clique aqui para se registrar
                    </a>
                    <a
                        href="/recuperar-senha-gerar-link"
                        style={{
                            marginTop: "2%",
                            padding: "12px",
                            borderRadius: "5px",
                            textDecoration: "none",
                            color: "#ff3f3f",
                            backgroundColor: "#fff",
                            fontSize: "14px",
                        }}
                    >
                        Esqueceu sua senha? Clique aqui
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
