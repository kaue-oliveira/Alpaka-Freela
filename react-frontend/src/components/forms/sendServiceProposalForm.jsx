import React from "react";

const SendServiceProposalForm = ({ onClose, onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const proposalText = event.target.elements.proposal.value.trim();
        if (proposalText) {
            onSubmit(proposalText); // Envia a proposta para o manipulador
            onClose(); // Fecha o modal
        } else {
            alert("Por favor, insira uma proposta.");
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
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    width: "90%",
                    maxWidth: "600px",
                    padding: "20px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    fontFamily: "Arial, sans-serif",
                    border: "1px solid #000000",
                }}
            >
                <h2 style={{ marginTop: "0" }}>Enviando proposta de serviço</h2>
                <p>Escreva a proposta na caixa de texto abaixo</p>
                <form onSubmit={handleSubmit}>
                    <textarea
                        name="proposal"
                        style={{
                            minWidth: "100%",
                            width: "100%",
                            maxWidth: "100%",
                            height: "200px",
                            maxHeight: "400px",
                            marginBottom: "20px",
                            padding: "10px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            fontFamily: "Arial, sans-serif",
                            boxSizing: "border-box",
                            border: "1px solid #000000",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "20px",
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
