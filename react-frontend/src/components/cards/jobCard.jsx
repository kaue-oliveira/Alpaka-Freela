import React from "react";
import Images from "../fixed/images";
import { motion } from "framer-motion";

const JobCard = ({ onServiceProposal, onCompleteVisualization, title, name, username, description, payment, profileImage }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.container}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "0" }}>
                    <div>
                        <h2 style={styles.title}>{title}</h2>
                        <p style={styles.publisher}>
                            Publicado por{" "}
                            <strong>{username} ({name})</strong>
                        </p>
                    </div>
                    <img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src={profileImage ? profileImage : Images.profileImage} alt="" />
                </div>

                <p style={styles.description}>
                    {description}
                </p>
                <p style={styles.payment}>
                    <span style={styles.paymentAmount}>Pagamento: R$ {payment}</span>
                </p>
                <div style={{ display: "flex", flexDirection: "row", gap: "2%" }}>
                    <button
                        style={styles.proposalButton}
                        onClick={onServiceProposal}
                    >
                        Fazer uma proposta
                    </button>
                    <button
                        style={styles.completeVisualizationButton}
                        onClick={onCompleteVisualization}
                    >
                        Visualização completa
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const styles = {
    container: {
        aspectRatio: "4 / 1" /* Proporção de largura para altura */,
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "20px",
        color: "#000000",
        fontWeight: "bold",
        marginBottom: "10px",
        marginTop: "0px",
    },
    publisher: {
        fontSize: "14px",
        color: "#000000",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        color: "#000",
        lineHeight: "1.6",
        margin: "0",
        marginBottom: "10px",
        height: "180px",
        maxHeight: "180px",
        overflow: "hidden",
        wordWrap: "break-word",
        wordBreak: "break-word",
        whiteSpace: "pre-wrap",
    },
    payment: {
        fontSize: "16px",
        color: "#000",
        margin: "10px 0",
    },
    paymentAmount: {
        color: "green",
        fontWeight: "bold",
    },
    proposalButton: {
        padding: "10px 20px",
        fontSize: "15px",
        backgroundColor: "#baffb3",
        border: "1px solid #000000",
        color: "#000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        width: "100%",
    },
    completeVisualizationButton: {
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

export default JobCard;
