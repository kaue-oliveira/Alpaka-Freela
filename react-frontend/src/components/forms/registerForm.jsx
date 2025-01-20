import React from "react";
import { useState } from "react";

import Images from "../fixed/images";

const RegisterForm = ({ onSubmit }) => {
    const [incorrectUsername, setIncorrectUsername] = useState("");
    const [incorrectName, setIncorrectName] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState("");
    const [passwordNotEquals, setPasswordNotEquals] = useState("");
    const [incorrectEmail, setIncorrectEmail] = useState("");

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        let readyForSubmitForm = true;

        const formData = {
            username: event.target.username.value.trim(),
            nome: event.target.nome.value.trim(),
            email: event.target.email.value.trim(),
            password1: event.target.password1.value,
            password2: event.target.password2.value
        }

        if (formData.username.length < 3 || formData.username.length > 40) {
            setIncorrectUsername("Seu username deve possuir entre 3 e 40 caracteres.");
            readyForSubmitForm = false;
        }

        if (formData.nome.length < 3 || formData.nome.length > 50) {
            setIncorrectName("Seu nome deve possuir entre 3 e 50 caracteres.");
            readyForSubmitForm = false;
        }

        if (formData.email.length === 0) {
            setIncorrectEmail("Digite um email válido.");
            readyForSubmitForm = false;
        }

        if (!formData.password1 || formData.password1.length < 8 || formData.password1.length > 20) {
            setIncorrectPassword("Sua senha deve possuir entre 8 e 20 caracteres.");
            readyForSubmitForm = false;
        }

        if (!formData.password2) {
            setPasswordNotEquals("Você precisa preencher os dois campos de senha");
            readyForSubmitForm = false;
        }

        if (formData.password1 !== formData.password2) {
            setPasswordNotEquals("As senhas não coincidem.");
            readyForSubmitForm = false;
        }

        if (readyForSubmitForm) {
            const data = {
                email: formData.email,
                senha: formData.password1,
                nome: formData.nome,
                username: formData.username,
            }

            try {
                const response = await fetch('http://localhost:8080/usuario', {
                    method: 'POST',
                    credentials: "include", // Permite envio/recebimento de cookies
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log(result);
                onSubmit(JSON.stringify(result));
            } catch (error) {
                console.log("error -> " + error.message);
                onSubmit(error.message);
            } 

            console.log(data);
        }
    }

    const handleChangeForm = () => {
        setIncorrectUsername("");
        setIncorrectName("");
        setIncorrectPassword("");
        setIncorrectEmail("");
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
                    height: "80vh"
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Criar conta
                </h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "0"
                    }}
                >
                    <img
                        src={Images.alpakaAstronaltCloud}
                        alt="Avatar"
                        style={{ borderRadius: "50%", width: "80%" }}
                    />
                </div>
                <form style={{ width: "100%" }} onSubmit={handleSubmitForm} onChange={handleChangeForm}>

                    {/* USERNAME */}
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
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "0px", height: "15px" }}>
                        {incorrectUsername}
                    </div>

                    {/* NOME */}
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira seu nome
                    </label>
                    <input
                        name="nome"
                        type="text"
                        placeholder="Nome"
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
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "0px", height: "15px" }}>
                        {incorrectName}
                    </div>

                    {/* EMAIL */}
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira seu email
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
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
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "0px", height: "15px" }}>
                        {incorrectEmail}
                    </div>

                    {/* SENHA 1 */}
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira sua senha
                    </label>
                    <input
                        type="password"
                        name="password1"
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
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "0px", height: "15px" }}>
                        {incorrectPassword}
                    </div>

                    {/* SENHA 2 */}
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Repita sua senha
                    </label>
                    <input
                        type="password"
                        name="password2"
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
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                        {passwordNotEquals}
                    </div>

                    {/* SUBMIT */}
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
                        Registrar
                    </button>
                </form>

                {/* ENTRAR BOTAO */}
                <a
                    href="/entrar"
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        textDecoration: "none",
                        color: "#000000",
                        fontSize: "14px",
                        marginTop: "2px"
                    }}
                >
                    Já possui uma conta? Clique aqui para se autenticar
                </a>
            </div>
        </div>
    );
};

export default RegisterForm;
