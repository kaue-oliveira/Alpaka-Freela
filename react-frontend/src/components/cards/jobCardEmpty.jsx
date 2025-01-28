import React from "react";
import { color, motion } from "framer-motion";


const JobCardEmpty = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div style={styles.container}>
                <h1 style={{
                    color: "#e0e0e0", wordWrap: "break-word",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                }}>[empty][empty][empty][empty][empty][empty][empty][empty][empty][empty][empty][empty][empty][empty][empty]</h1>
            </div>
        </motion.div>
    );
};

const styles = {
    container: {
        aspectRatio: "4 / 2" /* Proporção de largura para altura */,
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#e0e0e0",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
    },
};

export default JobCardEmpty;
