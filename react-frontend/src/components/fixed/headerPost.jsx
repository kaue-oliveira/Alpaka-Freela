import React, { useState } from "react";

const PostHeader = ({ title, buttonTitle, icon, form }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

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
        <button style={styles.button} onClick={toggleOverlay}>
          {buttonTitle}
        </button>

        {isOverlayOpen && (
          <div style={styles.overlay}>
            <div style={styles.overlayContent}>
              <button style={styles.closeButton} onClick={toggleOverlay}>
                X
              </button>
              {form}
            </div>
          </div>
        )}
      </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ddd",
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

export default PostHeader;