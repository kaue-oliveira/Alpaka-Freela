import React from "react";

import Images from "../fixed/images";


const UserCardForManager = ({ onDelete, name, nickname, email, profileImage }) => {

    return (
        <div style={styles.container}>
            <div style={styles.profileHeader}>
                <img
                    src={profileImage ? profileImage : Images.profileImage} // Substitua com a URL do ícone ou foto do perfil
                    alt="Profile"
                    style={styles.profileImage}
                />
                <div style={styles.profileDetails}>
                    <div style={{ display: "flex", width: "100%" }}><p style={{ fontWeight: "bold", margin: "0",}}>Nome: </p>{name}</div>
                    <div style={{ display: "flex", width: "100%" }}><p style={{ fontWeight: "bold", margin: "0"}}>Username: </p>{nickname}</div>
                    <div style={{ display: "flex", width: "100%" }}><p style={{ fontWeight: "bold", margin: "0" }}>Email: </p>{email}</div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2%" }}>
                <button
                    style={styles.completeVisualizationButton}
                    onClick={onDelete}
                >
                    Excluir
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: "100%", /* Proporção de largura para altura */
        height: "auto",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    profileImage: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        marginRight: "15px",
    },
    profileDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "10px",
        width: "100%"
    },
    name: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: 0,
    },
    username: {
        fontSize: "14px",
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
        height: "95px",
        maxHeight: "95px",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    skills: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "10px",
        height: "70px",
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
        backgroundColor: "#ffcccc",
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

export default UserCardForManager;
