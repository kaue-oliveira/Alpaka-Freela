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
                    fontSize: "15px"
                }}
            >
                <h3>Tem certeza que deseja excluir?</h3>
                <div style={{

                    display: "flex",
                    justifyContent: "space-between",
                    gap: "6%",
                }}>
                    <button
                        style={{
                            width: "auto",
                            padding: "10px",
                            border: "1px solid #000000",
                            borderRadius: "4px",
                            fontSize: "15px",
                            backgroundColor: "#beffc2",
                            color: "black",
                            cursor: "pointer",
                            fontWeight: "600",
                            flex: "1"
                        }}
                        onClick={onConfirm}
                    >
                        Sim
                    </button>
                    <button
                        style={{
                            width: "auto",
                            padding: "10px",
                            border: "1px solid #000000",
                            borderRadius: "4px",
                            fontSize: "15px",
                            backgroundColor: "#ffb2b9",
                            color: "black",
                            cursor: "pointer",
                            fontWeight: "600",
                            flex: "1"
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
