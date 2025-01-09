import React from "react";

import Images from "../fixed/images";

const PasswordRecoverForm = () => {
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
                    Recuperação de senha
                </h1>
                <form style={{ width: "100%" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Insira sua nova senha
                    </label>
                    <input
                        type="password"
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

                    <label style={{ display: "block", marginBottom: "5px" }}>
                        Repita sua nova senha
                    </label>
                    <input
                        type="password"
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
