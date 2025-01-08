import React, { useState } from "react";

const ServiceForm = () => {
  const [skills, setSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [techInput, setTechInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleAddTechnology = () => {
    if (techInput && !technologies.includes(techInput)) {
      setTechnologies([...technologies, techInput]);
      setTechInput("");
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleRemoveTechnology = (tech) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "20px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    subheader: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      fontSize: "14px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
      height: "100px",
    },
    chipContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "15px",
    },
    chip: {
      padding: "5px 10px",
      backgroundColor: "#e0e0e0",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
    },
    removeChip: {
      marginLeft: "8px",
      color: "#ff0000",
      cursor: "pointer",
      fontWeight: "bold",
    },
    button: {
      padding: "10px 16px",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      margin: "5px",
    },
    addButton: {
      backgroundColor: "#8bc34a",
      color: "#fff",
    },
    submitButton: {
      backgroundColor: "#6c5ce7",
      color: "#fff",
      flex: 1,
    },
    cancelButton: {
      backgroundColor: "#f44336",
      color: "#fff",
      flex: 1,
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Cadastrando oferta de serviço</h2>
      <p style={styles.subheader}>Insira os dados nos campos abaixo</p>

      <label style={styles.label}>Valor cobrado por hora</label>
      <input type="text" placeholder="Valor cobrado por hora" style={styles.input} />

      <label style={styles.label}>Descrição</label>
      <textarea placeholder="Descrição" style={styles.textarea}></textarea>

      <label style={styles.label}>Habilidades</label>
      <div style={styles.chipContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.chip}>
            {skill}
            <span style={styles.removeChip} onClick={() => handleRemoveSkill(skill)}>
              X
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Habilidades"
        value={skillInput}
        onChange={(e) => setSkillInput(e.target.value)}
        style={styles.input}
      />
      <button style={{ ...styles.button, ...styles.addButton }} onClick={handleAddSkill}>
        Adicionar
      </button>

      <label style={styles.label}>Tecnologias</label>
      <div style={styles.chipContainer}>
        {technologies.map((tech, index) => (
          <div key={index} style={styles.chip}>
            {tech}
            <span style={styles.removeChip} onClick={() => handleRemoveTechnology(tech)}>
              X
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Tecnologias"
        value={techInput}
        onChange={(e) => setTechInput(e.target.value)}
        style={styles.input}
      />
      <button style={{ ...styles.button, ...styles.addButton }} onClick={handleAddTechnology}>
        Adicionar
      </button>

      <div style={styles.buttonGroup}>
        <button style={{ ...styles.button, ...styles.submitButton }}>Cadastrar oferta de serviço</button>
        <button style={{ ...styles.button, ...styles.cancelButton }}>Cancelar</button>
      </div>
    </div>
  );
};

export default ServiceForm;
