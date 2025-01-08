import React, { useState } from "react";
import MenuButtonSelect from "../buttons/menuButtonSelect";

const HeaderAreaSwitcher = ({ title, buttons, icon, onButtonClick }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textWrapper}>
        <img 
          src={icon} 
          alt="Icon" 
          style={styles.icon} 
        />
        <span style={styles.text}>{title}</span>
      </div>

      <div style={styles.buttonsContainer}>
        <MenuButtonSelect
          buttons={buttons}
          onButtonClick={onButtonClick} 
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #a6a6a6",
    borderRadius: "8px",
    width: "95%",
    margin: "20px auto",
    justifyContent: "space-between",
    backgroundColor: "white",
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
    fontSize: "16px",
    color: "#333",
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#6c5ce7",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  overlayContent: {
    position: "relative",
    width: "90%",
    maxWidth: "500px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "#333",
  },
};

export default HeaderAreaSwitcher;