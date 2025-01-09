import React, { useState } from "react";
import Images from "../fixed/images";

const JobForm = ({ onClose }) => {
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
            width: "40%",
            height: "80%",
            // margin: "20px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            border: "1px solid #000000",
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
            border: "1px solid #ccc",
            boxSizing: "border-box",
            border: "1px solid #000000",
        },
        textarea: {
            minWidth: "100%",
            width: "100%",
            minHeight: "39%",
            maxWidth: "100%",
            maxHeight: "39%",
            height: "39%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            border: "1px solid #000000",
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
            border: "1px solid #000000",
            justifyContent: "center",
            fontWeight: "500",
        },
        removeTech: {
            cursor: "pointer",
        },
        button: {
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            border: "1px solid #000000",
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
                <h2 style={styles.header}>Cadastrando oferta de trabalho</h2>
                <label style={styles.label} htmlFor="title">
                    Título
                </label>
                <input
                    id="title"
                    type="text"
                    placeholder="Título"
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

                            <img
                                src={Images.closeX}
                                alt="close"
                                style={{
                                    width: "15px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                    marginLeft: "5%",
                                }}
                                onClick={() => handleRemoveTechnology(tech)}
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
                    Adicionar
                </button>
                <div style={{ marginTop: "2%" }}>
                    <button
                        type="submit"
                        style={{ ...styles.button, ...styles.submitButton }}
                    >
                        Cadastrar oferta de trabalho
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

export default JobForm;
