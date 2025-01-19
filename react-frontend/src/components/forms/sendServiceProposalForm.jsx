import React, { useState } from "react";

const SendServiceProposalForm = ({ onClose, onSucess }) => {
    const [textAreaLettersQuantity, setTextAreaLettersQuantity] = useState(0);
    const [excedLengthErrorMessage, setExcedErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const proposalText = event.target.elements.proposal.value.trim();
        if (proposalText && proposalText.length >= 100 && proposalText.length <= 7000) {
            onSucess("Proposta de serviço enviada com sucesso.");
        } else {
            setExcedErrorMessage("Sua proposta deve ter no mínimo 100 e no máximo 7000 caracteres.");
        }
    };

    const handleTextAreaChange = (event) => {
        setTextAreaLettersQuantity(event.target.value.length);
        if (excedLengthErrorMessage) {
            setExcedErrorMessage("");
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                padding: "10px", // Para espaçamento em telas menores
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    width: "100%",
                    maxWidth: "600px",
                    height: "60vh",
                    padding: "20px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #000000",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h2 style={{ margin: "0" }}>
                    Enviando proposta de serviço
                </h2>
                <p>Escreva a proposta na caixa de texto abaixo</p>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    <div style={{ flexGrow: 1 }}>
                        <textarea
                            name="proposal"
                            style={{
                                minWidth: "100%",
                                width: "100%",
                                height: "90%",
                                maxHeight: "100%",
                                padding: "10px",
                                borderRadius: "4px",
                                border: "1px solid #000000",
                                fontSize: "16px",
                                fontFamily: "Arial, sans-serif",
                                boxSizing: "border-box",
                                marginBottom: "10px",
                                resize: "none"
                            }}
                            onChange={handleTextAreaChange}
                        />
                        <div style={{ fontSize: "14px" }}>
                            {textAreaLettersQuantity} / 7000
                        </div>
                        <div
                            style={{
                                color: "red",
                                fontSize: "14px",
                                marginTop: "5px",
                                height: "18px", // Garante que o espaço seja reservado mesmo sem mensagem de erro
                            }}
                        >
                            {excedLengthErrorMessage}
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "auto", // Empurra os botões para o final
                            paddingTop: "10px",
                        }}
                    >
                        <button
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                fontSize: "16px",
                                border: "none",
                                borderRadius: "4px",
                                backgroundColor: "#beffc2",
                                color: "black",
                                cursor: "pointer",
                                border: "1px solid #000000",
                            }}
                        >
                            Enviar Proposta
                        </button>
                        <button
                            type="button"
                            style={{
                                padding: "10px 20px",
                                fontSize: "16px",
                                border: "none",
                                borderRadius: "4px",
                                backgroundColor: "#ffb2b9",
                                color: "black",
                                cursor: "pointer",
                                border: "1px solid #000000",
                            }}
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendServiceProposalForm;