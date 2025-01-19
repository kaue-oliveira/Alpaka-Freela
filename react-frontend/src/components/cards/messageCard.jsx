import React from "react";

const MessageCard = ({ onClose, message }) => {
    return (
        <div style={styles.overlay}>
            <div style={styles.container}>
                <h1 style={styles.description}>
                    {message}
                </h1>
                <button
                    style={styles.button}
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    container: {
        aspectRatio: "5 / 1" /* Proporção de largura para altura */,
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    description: {
        width: "100%",
        fontSize: "20px",
        color: "#000000",
        lineHeight: "1.6",
        margin: 0,
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "15px",
        backgroundColor: "#b8dbda",
        border: "1px solid #000000",
        color: "#000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        width: "100%",
    },
};

export default MessageCard;
