import React, { useState } from "react";

const PostHeader = ({ title, buttonTitle, icon, onPost }) => {
    return (
        <div style={styles.container}>
            <div style={styles.textWrapper}>
                <img src={icon} alt="Icon" style={styles.icon} />
                <span style={styles.text}>{title}</span>
            </div>
            <button style={styles.button} onClick={onPost}>
                {buttonTitle}
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #000000",
        borderRadius: "8px",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "white",
        boxSizing: "border-box",
    },
    textWrapper: {
        display: "flex",
        alignItems: "center",
    },
    icon: {
        width: "30px",
        height: "30px",
        marginRight: "10px",
    },
    text: {
        fontSize: "22px",
        color: "#000000",
        fontWeight: "500",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#0e3aff",
        color: "#fff",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "800",
    },
};

export default PostHeader;
