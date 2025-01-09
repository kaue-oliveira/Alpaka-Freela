import React, { useState } from "react";
import Images from "../fixed/images";

const EditServiceForm = ({ onClose }) => {
    const [technologies, setTechnologies] = useState([]);
    const [techInput, setTechInput] = useState("");
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");

    const handleAddTechnology = () => {
        if (techInput && !technologies.includes(techInput)) {
            setTechnologies([...technologies, techInput]);
            setTechInput("");
        }
    };

    const handleRemoveTechnology = (tech) => {
        setTechnologies(technologies.filter((t) => t !== tech));
    };

    const handleAddSkill = () => {
        if (skillInput && !skills.includes(skillInput)) {
            setSkills([...skills, skillInput]);
            setSkillInput("");
        }
    };

    const handleRemoveSkill = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
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
            width: "40%",
            height: "80%",
            padding: "20px",
            border: "1px solid #000",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
        },
        header: {
            fontSize: "1.5rem",
            marginBottom: "20px",
            marginTop: "0",
            textAlign: "start",
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
            border: "1px solid #000",
            boxSizing: "border-box",
        },
        textarea: {
            minWidth: "100%",
            width: "100%",
            minHeight: "25%",
            maxWidth: "100%",
            maxHeight: "25%",
            height: "25%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #000",
            boxSizing: "border-box",
        },
        techList: {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "15px",
        },
        techItem: {
            padding: "3px 5px",
            fontSize: "14px",
            backgroundColor: "#ead7ff",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #000",
            fontWeight: "500",
        },
        button: {
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "1px solid #000",
        },
        submitButton: {
            backgroundColor: "#beffc2",
            color: "#000000",
            marginRight: "10px",
        },
        cancelButton: {
            backgroundColor: "#ffb2b9",
            color: "#000000",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.form}>
                <h2 style={styles.header}>Editando oferta de serviço</h2>
                <label style={styles.label} htmlFor="title">
                    Valor cobrado por hora
                </label>
                <input
                    id="hour-value"
                    type="text"
                    placeholder="Valor cobrado por hora"
                    style={styles.input}
                />
                <label style={styles.label} htmlFor="description">
                    Descrição
                </label>
                <textarea
                    id="description"
                    placeholder="Descrição"
                    style={styles.textarea}
                />
                <div
                    style={{ display: "flex", gap: "5%", flexDirection: "row" }}
                >
                    {/* Tecnologias */}
                    <div style={{ flex: "1" }}>
                        <label style={styles.label} htmlFor="technologies">
                            Tecnologias
                        </label>
                        <div style={styles.techList}>
                            {technologies.map((tech) => (
                                <div key={tech} style={styles.techItem}>
                                    {tech}
                                    <img
                                        src={Images.closeX}
                                        alt="close"
                                        style={{
                                            width: "15px",
                                            cursor: "pointer",
                                            marginLeft: "5%",
                                        }}
                                        onClick={() =>
                                            handleRemoveTechnology(tech)
                                        }
                                    />
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
                        <button
                            type="button"
                            onClick={handleAddTechnology}
                            style={styles.button}
                        >
                            Adicionar Tecnologia
                        </button>
                    </div>

                    <div style={{ flex: "1" }}>
                        {/* Habilidades */}
                        <label style={styles.label} htmlFor="skills">
                            Habilidades
                        </label>
                        <div style={styles.techList}>
                            {skills.map((skill) => (
                                <div key={skill} style={styles.techItem}>
                                    {skill}
                                    <img
                                        src={Images.closeX}
                                        alt="close"
                                        style={{
                                            width: "15px",
                                            cursor: "pointer",
                                            marginLeft: "5%",
                                        }}
                                        onClick={() => handleRemoveSkill(skill)}
                                    />
                                </div>
                            ))}
                        </div>
                        <input
                            id="skills"
                            type="text"
                            placeholder="Habilidades"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            style={styles.input}
                        />
                        <button
                            type="button"
                            onClick={handleAddSkill}
                            style={styles.button}
                        >
                            Adicionar Habilidade
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: "20px" }}>
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

export default EditServiceForm;
