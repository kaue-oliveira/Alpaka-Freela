import React, { useState, useEffect } from "react";
import Images from "../fixed/images";
import styled from "styled-components";

const ScrollContainerPurple = styled.div`
  overflow-y: auto;
  height: 100%; 
  
  ::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
    border: 1px #000 solid;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #ead7ff;
    border: 1px #000 solid;
  }
`;

const ServiceForm = ({ onClose, onSucess }) => {
    const [technologies, setTechnologies] = useState([]);
    const [techInput, setTechInput] = useState("");
    const [skills, setSkills] = useState([]);
    const [skillInput, setSkillInput] = useState("");

    const [excedLengthErrorMessage, setExcedErrorMessage] = useState("");
    const [incorrectValueErrorMessage, setIncorrectValueErrorMessage] = useState("");
    const [textAreaLettersQuantity, setTextAreaLettersQuantity] = useState(0);
    const [incorrectTechsErrorMessage, setIncorrectTechsErrorMessage] = useState("");
    const [incorrectSkillsErrorMessage, setIncorrectSkillsErrorMessage] = useState("");
    const [formErrorMessage, setFormErrorMessage] = useState("");

    const handleAddTechnology = () => {
        if (techInput && !technologies.includes(techInput)) {
            setTechnologies([...technologies, techInput]);
            setTechInput("");
            setIncorrectTechsErrorMessage("");
        }
    };

    const submitFormHandle = (event) => {
        event.preventDefault();

        let formData = {
            description: event.target.description.value,
            hourValue: event.target.hourValue.value,
            technologies,
            skills
        };

        let error = false;

        if (!formData.hourValue) {
            setIncorrectValueErrorMessage("Você precisa digitar um número positivo.");
            error = true;
        } 
        
        if (formData.description.length < 100 || formData.description.length > 7000) {
            setExcedErrorMessage("Sua descrição deve ter no mínimo 100 e no máximo 7000 caracteres.");
            error = true;
        } 
        
        if (technologies.length !== 3){
            setIncorrectTechsErrorMessage("Você precisa selecionar 3 tecnologias.");
            error = true;
        }

        if (skills.length < 1 || skills.length > 30) {
            setIncorrectSkillsErrorMessage("Você precisa selecionar um número entre 1 e 30 de habilidades.");
            error = true;
        }

        if (!error) {
            // console.log(formData);

            setFormErrorMessage("Internal server error, try again.");
            
            onSucess("Oferta de serviço cadastrada com sucesso.");
        }
    }

    const handleInputValue = (event) => {
        const value = event.target.value;

        setIncorrectValueErrorMessage("");

        if (value < 0) {
            setIncorrectValueErrorMessage("Você precisa digitar um número positivo.");
        }
    }

    const handleDescription = (event) => {
        const description = event.target.value.trim();
        setExcedErrorMessage("");
        setTextAreaLettersQuantity(description.length);
    }

    const handleRemoveTechnology = (tech) => {
        setTechnologies(technologies.filter((t) => t !== tech));
    };

    const handleAddSkill = () => {
        if (skillInput && !skills.includes(skillInput)) {
            setSkills([...skills, skillInput]);
            setSkillInput("");
            setIncorrectSkillsErrorMessage("");
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
            width: "100vh",
            height: "80vh",
            marginTop: "6vh",
            padding: "20px",
            border: "1px solid #000",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "end",
            flexDirection: "column"
        },
        header: {
            fontSize: "2rem",
            marginBottom: "25px",
            marginTop: "0",
            textAlign: "start",
        },
        label: {
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
        },
        input: {
            width: "98%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #000",
            boxSizing: "border-box",
        },
        textarea: {
            minWidth: "98%",
            width: "98%",
            minHeight: "60%",
            maxWidth: "98%",
            maxHeight: "60%",
            height: "60%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #000",
            boxSizing: "border-box",
            resize: "none"
        },
        techList: {
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "15px",
            marginBottom: "15px",
            overflow: "auto",
            maxHeight: "100px",
            width: "40%"
        },
        techItem: {
            width: "90%",
            padding: "3px 5px",
            fontSize: "14px",
            backgroundColor: "#ead7ff",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #000",
            fontWeight: "500",
            justifyContent: "space-between"
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
                <h1 style={styles.header}>Cadastrando oferta de serviço</h1>
                <form style={{ boxSizing: "border-box", height: "90%" }} onSubmit={submitFormHandle}>
                    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <ScrollContainerPurple>
                            <div style={{ overflow: "auto", height: "97%" }}>
                                <label style={styles.label} htmlFor="title">
                                    Valor cobrado por hora
                                </label>
                                <input
                                    name="hourValue"
                                    id="hour-value"
                                    type="number"
                                    step="0.01"
                                    placeholder="Valor cobrado por hora"
                                    style={styles.input}
                                    min="0"
                                    onChange={handleInputValue}
                                />
                                <div style={{ color: "red", fontSize: "14px", marginTop: "5px", marginBottom: "5px", height: "18px", }}>
                                    {incorrectValueErrorMessage}
                                </div>
                                <label style={styles.label} htmlFor="description">
                                    Descrição
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    placeholder="Descrição"
                                    style={styles.textarea}
                                    onChange={handleDescription}
                                />
                                <p style={{ margin: "0" }}>{textAreaLettersQuantity} / 7000</p>
                                <div style={{ color: "red", fontSize: "14px", marginTop: "5px", marginBottom: "5px", height: "18px", }}>
                                    {excedLengthErrorMessage}
                                </div>

                                {/* Tecnologias */}
                                <div style={{ flex: "1" }}>
                                    <label style={styles.label} htmlFor="technologies">
                                        Selecione 3 Tecnologias
                                    </label>
                                    <div style={{ display: "flex", gap: "2.5%", width: "98%" }}>
                                        <select
                                            name="technologies"
                                            id="technologies"
                                            style={styles.input}
                                            onChange={(e) => setTechInput(e.target.value)}
                                        >
                                            <option value="JavaScript">JavaScript</option>
                                            <option value="React">React</option>
                                            <option value="Node.js">Node.js</option>
                                            <option value="Python">Python</option>
                                            <option value="Django">Django</option>
                                            <option value="Ruby on Rails">Ruby on Rails</option>
                                            <option value="Java">Java</option>
                                            <option value="Spring Boot">Spring Boot</option>
                                            <option value="PHP">PHP</option>
                                            <option value="Laravel">Laravel</option>
                                            <option value="C#">C#</option>
                                            <option value="ASP.NET">ASP.NET</option>
                                            <option value="MySQL">MySQL</option>
                                            <option value="PostgreSQL">PostgreSQL</option>
                                            <option value="MongoDB">MongoDB</option>
                                            <option value="GraphQL">GraphQL</option>
                                            <option value="AWS">AWS</option>
                                            <option value="Docker">Docker</option>
                                            <option value="Kubernetes">Kubernetes</option>
                                            <option value="Git">Git</option>
                                            <option value="Terraform">Terraform</option>
                                            <option value="Jenkins">Jenkins</option>
                                        </select>
                                        <button
                                            type="button"
                                            onClick={handleAddTechnology}
                                            style={styles.button}
                                        >
                                            Adicionar
                                        </button>
                                    </div>
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
                                    <div style={{ color: "red", fontSize: "14px", height: "18px", }}>
                                        {incorrectTechsErrorMessage}
                                    </div>
                                </div>

                                {/* Linha separadora */}
                                <div style={{
                                    width: "98%",
                                    height: "1px",
                                    backgroundColor: "#000",
                                    margin: "20px 0" // Espaçamento vertical
                                }}></div>

                                <div style={{ flex: "1" }}>
                                    {/* Habilidades */}
                                    <label style={styles.label} htmlFor="skills">
                                        Selecione até 30 habilidades
                                    </label>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "2.5%", width: "98%" }}>
                                        <select
                                            name="skills"
                                            id="skills"
                                            style={styles.input}
                                            onChange={(e) => setSkillInput(e.target.value)}
                                        >
                                            <option value="Trabalho em equipe">Trabalho em equipe</option>
                                            <option value="Comunicação">Comunicação</option>
                                            <option value="Gerenciamento de tempo">Gerenciamento de tempo</option>
                                            <option value="Disciplina">Disciplina</option>
                                            <option value="Resolução de problemas">Resolução de problemas</option>
                                            <option value="Pensamento crítico">Pensamento crítico</option>
                                            <option value="Flexibilidade">Flexibilidade</option>
                                            <option value="Criatividade">Criatividade</option>
                                            <option value="Liderança">Liderança</option>
                                            <option value="Tomada de decisão">Tomada de decisão</option>
                                            <option value="Organização">Organização</option>
                                            <option value="Proatividade">Proatividade</option>
                                            <option value="Trabalho sob pressão">Trabalho sob pressão</option>
                                            <option value="Atenção aos detalhes">Atenção aos detalhes</option>
                                            <option value="Empatia">Empatia</option>
                                            <option value="Negociação">Negociação</option>
                                            <option value="Habilidade analítica">Habilidade analítica</option>
                                            <option value="Adaptabilidade">Adaptabilidade</option>
                                            <option value="Motivação pessoal">Motivação pessoal</option>
                                            <option value="Colaboração">Colaboração</option>
                                            <option value="Gestão de conflitos">Gestão de conflitos</option>
                                            <option value="Planejamento estratégico">Planejamento estratégico</option>
                                            <option value="Conhecimento técnico">Conhecimento técnico</option>
                                        </select>
                                        <button
                                            type="button"
                                            onClick={handleAddSkill}
                                            style={styles.button}
                                        >
                                            Adicionar
                                        </button>
                                    </div>
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
                                    <div style={{ color: "red", fontSize: "14px", height: "18px", }}>
                                        {incorrectSkillsErrorMessage}
                                    </div>
                                </div>
                            </div>
                        </ScrollContainerPurple>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <button
                                type="submit"
                                style={{ ...styles.button, ...styles.submitButton }}
                            >
                                Cadastrar
                            </button>
                            <button
                                type="button"
                                style={{ ...styles.button, ...styles.cancelButton }}
                                onClick={onClose}
                            >
                                Cancelar
                            </button>
                            <div style={{ color: "red", fontSize: "15px", marginLeft: "10px", height: "18px", }}>
                                {formErrorMessage}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;
