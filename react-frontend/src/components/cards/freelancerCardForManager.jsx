import React from "react";
import { motion } from "framer-motion";
import Images from "../fixed/images";


const FreelancerCardForManager = ({ onDelete, onEdit, onVisualizeProposals, id, name, nickname, hourValue, description, skills, techs, profileImage }) => {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.container}>
                <div style={styles.profileDetails}>
                    <h3 style={styles.name}>{name}</h3>
                    <p style={styles.price}>Valor cobrado por hora: R$ {hourValue}</p>
                </div>
                <div style={styles.username}>
                    <p style={{ fontWeight: "bold", margin: "0", marginBottom: "1%" }}>Oferta de número #{id} publicada por Você</p>
                </div>
                <div style={styles.profileHeader}>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <p style={styles.description}>
                            {description}
                        </p>
                    </div>
                </div>
                <div style={styles.skills}>
                    {skills.map((skill, index) => (
                        <div style={styles.skillButton} key={index}>
                            {skill}
                        </div>
                    ))}
                </div>
                <div style={styles.techs}>
                    {techs.map((tech, index) => (
                        <div style={styles.techButton} key={index}>
                            {tech}
                        </div>
                    ))}
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: "2%" }}>
                    {onVisualizeProposals && (
                        <button
                            style={styles.contractButton}
                            onClick={onVisualizeProposals}
                        >
                            Propostas recebidas
                        </button>
                    )}
                    <button
                        style={styles.completeVisualizationButton}
                        onClick={onEdit}
                    >
                        Editar
                    </button>
                    <button
                        style={styles.completeVisualizationButton}
                        onClick={onDelete}
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const styles = {
    container: {
        aspectRatio: "5 / 1" /* Proporção de largura para altura */,
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column"
    },
    profileHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        marginBottom: "15px",
    },
    profileImage: {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        marginRight: "15px",
    },
    profileDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2%",
        marginBottom: "10px",
    },
    name: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: 0,
    },
    username: {
        fontSize: "15px",
        color: "#000000",
        margin: 0,
        display: "flex",
    },
    price: {
        fontSize: "20px",
        color: "#3b9951",
        fontWeight: "bold",
        margin: "0",
    },
    description: {
        fontSize: "14px",
        color: "#000000",
        marginBottom: "0",
        height: "178px",
        maxHeight: "178px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        wordBreak: "break-word",
        whiteSpace: "normal",
        width: "100%"
    },
    skills: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "10px",
        maxHeight: "70px",
        overflow: "hidden"
    },
    skillButton: {
        padding: "6px 12px",
        fontSize: "13px",
        backgroundColor: "#9cffbf",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#000000",
        border: "1px solid #000000",
        fontWeight: "800",
    },
    techs: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "10px",
    },
    techButton: {
        padding: "6px 12px",
        fontSize: "13px",
        backgroundColor: "#ead7ff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#000000",
        border: "1px solid #000000",
        fontWeight: "600",
    },
    contractButton: {
        padding: "10px 20px",
        backgroundColor: "#b7ffb4",
        border: "1px solid #000000",
        color: "#000000",
        fontSize: "15px",
        fontWeight: "600",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        flex: "1",
    },
    completeVisualizationButton: {
        padding: "10px 20px",
        backgroundColor: "#b8dbda",
        border: "1px solid #000000",
        color: "#000000",
        fontSize: "15px",
        fontWeight: "600",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        flex: "1",
    },
};

export default FreelancerCardForManager;
