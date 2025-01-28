import React from "react";
// import { motion } from "framer-motion";

const MessageCard = ({ onClose, message }) => {
    return (
        // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.overlay}>
                <div style={styles.container}>
                    <p style={styles.description}>
                        {message}
                    </p>
                    <button
                        style={styles.button}
                        onClick={onClose}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        // </motion.div>
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
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "70vh"
    },
    description: {
        width: "100%",
        fontSize: "15px",
        color: "#000000",
        lineHeight: "1.6",
        margin: 0,
        marginBottom: "20px",
        fontWeight: "600",
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
