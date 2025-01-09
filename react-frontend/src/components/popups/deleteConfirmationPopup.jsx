import React from "react";

const DeleteConfirmationPopup = ({ onClose, onConfirm }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <h3>Tem certeza que deseja excluir?</h3>
                <div>
                    <button
                        style={{
                            margin: "0 10px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "#4caf50",
                            color: "white",
                            cursor: "pointer",
                        }}
                        onClick={onConfirm}
                    >
                        Sim
                    </button>
                    <button
                        style={{
                            margin: "0 10px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "#f44336",
                            color: "white",
                            cursor: "pointer",
                        }}
                        onClick={onClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationPopup;
