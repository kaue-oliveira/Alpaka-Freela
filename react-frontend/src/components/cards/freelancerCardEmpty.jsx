import React from "react";
import { motion } from "framer-motion";

const FreelancerCardEmpty = () => {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.container}>
            </div>
        </motion.div>
    );
};

const styles = {
    container: {
        aspectRatio: "2 / 1" /* Proporção de largura para altura */,
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#e0e0e0",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column"
    },
};

export default FreelancerCardEmpty;
