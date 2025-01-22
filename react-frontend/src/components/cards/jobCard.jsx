import React from "react";
import Images from "../fixed/images";


const JobCard = ({ onServiceProposal, onCompleteVisualization, title, name, username, description, payment, skills, profileImage }) => {
    return (
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
            <div style={styles.skills}>
                {skills.map((skill, index) => (
                    <div style={styles.skillButton} key={index}>
                        {skill}
                    </div>
                ))}
            </div>
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
        overflow: "hidden"
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
    skills: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        margin: "10px 0",
    },
    skillButton: {
        padding: "8px 12px",
        backgroundColor: "#ead7ff",
        color: "#000000",
        border: "1px solid #000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "800",
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
