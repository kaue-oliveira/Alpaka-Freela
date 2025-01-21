import React from "react";
import { useState } from "react";
import Images from "../fixed/images";

const PasswordRecoverGenerateLink = ({ onSubmit }) => {
    const [incorrectEmail, setIncorrectEmail] = useState("");

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        let canSubmitForm = true;

        const emailForm = event.target.email.value;

        if (!emailForm) {
            setIncorrectEmail("Digite um email valido.");
            canSubmitForm = false;
        }

        if (canSubmitForm) {
            try {
                const response = await fetch(`http://localhost:8080/auth/redefinir-senha?email=${encodeURIComponent(emailForm)}`, {
                    method: 'POST',
                    credentials: "include", // Permite envio/recebimento de cookies
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
        setIncorrectEmail("");
    }

    return (
        <div style={{ width: "40%" }}>
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
                    Gerar link para recuperação de senha
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
                    <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "15px", height: "15px" }}>
                        {incorrectEmail}
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            height: "70px",
                            padding: "10px",
                            backgroundColor: "#aaf0d1",
                            color: "#000000",
                            fontSize: "20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            textAlign: "start",
                            paddingLeft: "15px",
                            boxShadow: "5px 5px 0px 0px rgba(212, 212, 212, 0.5)" 
                        }}
                    >
                        Enviar link para o email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PasswordRecoverGenerateLink;
