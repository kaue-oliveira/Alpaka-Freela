import React, { useState } from "react";

const EditJobForm = ({ onClose }) => {
  const [technologies, setTechnologies] = useState([]);
  const [techInput, setTechInput] = useState("");

  const handleAddTechnology = () => {
    if (techInput && !technologies.includes(techInput)) {
      setTechnologies([...technologies, techInput]);
      setTechInput("");
    }
  };

  const handleRemoveTechnology = (tech) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const styles = {
    container: {
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
    form: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "500px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff"
    },
    header: {
      fontSize: "1.5rem",
      marginBottom: "20px",
      textAlign: "center",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    textarea: {
      width: "100%",
      height: "80px",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    techList: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "15px",
    },
    techItem: {
      padding: "5px 10px",
      backgroundColor: "#e0e0e0",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
    },
    removeTech: {
      marginLeft: "8px",
      color: "#ff0000",
      cursor: "pointer",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    submitButton: {
      backgroundColor: "#8bc34a",
      color: "#fff",
      marginRight: "10px",
    },
    cancelButton: {
      backgroundColor: "#f44336",
      color: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.header}>Editando uma oferta de trabalho</h2>
        <label style={styles.label} htmlFor="title">
          Título
        </label>
        <input id="title" type="text" placeholder="Título" style={styles.input} />
        <label style={styles.label} htmlFor="description">
          Descrição
        </label>
        <textarea
          id="description"
          placeholder="Descrição"
          style={styles.textarea}
        />
        <label style={styles.label} htmlFor="payment">
          Pagamento
        </label>
        <input
          id="payment"
          type="text"
          placeholder="Pagamento"
          style={styles.input}
        />
        <label style={styles.label} htmlFor="technologies">
          Tecnologias
        </label>
        <div style={styles.techList}>
          {technologies.map((tech) => (
            <div key={tech} style={styles.techItem}>
              {tech}
              <span
                style={styles.removeTech}
                onClick={() => handleRemoveTechnology(tech)}
              >
                X
              </span>
            </div>
          ))}
        </div>
        <input
          id="technologies"
          type="text"
          placeholder="Tecnologias"
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          style={styles.input}
        />
        <button type="button" onClick={handleAddTechnology} style={styles.button}>
          Adicionar
        </button>
        <div>
          <button
            type="submit"
            style={{ ...styles.button, ...styles.submitButton }}
          >
            Salvar
          </button>
          <button
            type="button"
            style={{ ...styles.button, ...styles.cancelButton }}
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditJobForm;