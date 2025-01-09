import React, { useState } from "react";

const PostHeader = ({ title, buttonTitle, icon, onPost }) => {
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
};

export default PostHeader;