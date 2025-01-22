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

const EditServiceForm = ({ onClose, onSubmit, onUpdatedService, id }) => {
    const [serviceId, setServiceId] = useState("");
    const [hourValue, setHourValue] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState([]);
    const [skills, setSkills] = useState([]);

    const [excedLengthErrorMessage, setExcedErrorMessage] = useState("");
    const [incorrectValueErrorMessage, setIncorrectValueErrorMessage] = useState("");
    const [textAreaLettersQuantity, setTextAreaLettersQuantity] = useState(0);
    const [incorrectTechsErrorMessage, setIncorrectTechsErrorMessage] = useState("");
    const [incorrectSkillsErrorMessage, setIncorrectSkillsErrorMessage] = useState("");
    const [formErrorMessage, setFormErrorMessage] = useState("");

    const [techInput, setTechInput] = useState("");
    const [skillInput, setSkillInput] = useState("");
    const [skillsToSelect, setSkillsToSelect] = useState("");
    const [techsToSelect, setTechsToSelect] = useState("");

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await fetch(backendDomain + '/ofertas-servico/' + id, {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setServiceId(result.id);
                    setHourValue(result.valorCobrado);
                    setDescription(result.descricao);
                    setTextAreaLettersQuantity(result.descricao.length);

                    let tmpSkills = [];
                    let tmpTechs = [];

                    for (let i = 0; i < result.habilidades.length; i++) {
                        tmpSkills.push(result.habilidades[i].nome);
                    }

                    for (let i = 0; i < result.tecnologias.length; i++) {
                        tmpTechs.push(result.tecnologias[i].nome);
                    }

                    setSkills(tmpSkills);
                    setTechnologies(tmpTechs);
                } else {
                    console.log("erro ao fazer fetch na oferta de servico buscada");
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchServiceData();
    }, []);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch(backendDomain + '/habilidades', {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setSkillsToSelect(result);      
                } else {
                    console.log("erro ao fazer fetch nas habilidades");
                }
            } catch (error) {
                console.log(error);
            }
        }

        const fetchTechs = async () => {
            try {
                const response = await fetch(backendDomain + '/tecnologias', {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setTechsToSelect(result);
                } else {
                    console.log("erro ao fazer fetch nas tecnologias");

                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchSkills();
        fetchTechs();
    }, []);

    const handleAddTechnology = () => {
        if (techInput && !technologies.includes(techInput)) {
            setTechnologies([...technologies, techInput]);
            console.log(techInput);
            
            setTechInput("");
            setIncorrectTechsErrorMessage("");
        }
    };

    const submitFormHandle = async (event) => {
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

        if (technologies.length !== 3) {
            setIncorrectTechsErrorMessage("Você precisa selecionar 3 tecnologias.");
            error = true;
        }

        if (skills.length < 5 || skills.length > 30) {
            setIncorrectSkillsErrorMessage("Você precisa selecionar um número entre 5 e 30 de habilidades.");
            error = true;
        }

        if (!error) {
            let tecnologiasIds = [];
            let habilidadesIds = [];

            for (let i = 0; i < technologies.length; i++) {
                for (let j = 0; j < techsToSelect.length; j++) {       
                    if (techsToSelect[j].nome === technologies[i]) {
                        tecnologiasIds.push(techsToSelect[j].id);
                    }
                }
            }

            for (let i = 0; i < skills.length; i++) {
                for (let j = 0; j < skillsToSelect.length; j++) {
                    if (skillsToSelect[j].nome === skills[i]) {
                        habilidadesIds.push(skillsToSelect[j].id);
                    }
                }
            }

            const data = {
                id: serviceId,
                descricao: formData.description,
                valorCobrado: formData.hourValue,
                tecnologiasIds,
                habilidadesIds
            }

            try {
                const response = await fetch(backendDomain + '/ofertas-servico', {
                    method: 'PUT',
                    credentials: "include", // Permite envio/recebimento de cookies
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    onSubmit("Oferta de serviço atualizada com sucesso.");   
                    let resultData = result;

                    let habilidades = [];
                    let tecnologias = [];

                    for (let j = 0; j < resultData.habilidades.length; j++) {
                        habilidades.push(resultData.habilidades[j].nome);
                    }

                    for (let j = 0; j < resultData.tecnologias.length; j++) {
                        tecnologias.push(resultData.tecnologias[j].nome);
                    }

                    resultData.habilidades = habilidades;
                    resultData.tecnologias = tecnologias;

                    console.log(resultData);
 
    
                    onUpdatedService(resultData);                 
                } else {
                    console.log(result);
                    setFormErrorMessage(result);
                }
            } catch (error) {
                console.log(error);
                onSubmit(error);
            }
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
            flexDirection: "column",
            marginTop: "15px",
            marginBottom: "15px",
            overflow: "auto",
            height: "150px",
            width: "40%"
        },
        techItem: {
            width: "90%",
            // maxHeight: "20px",
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
                <h1 style={styles.header}>Editando oferta de serviço</h1>
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
                                    defaultValue={hourValue}
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
                                    defaultValue={description}
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
                                            {techsToSelect && techsToSelect.length > 0 ? (
                                                techsToSelect.map(tech => (
                                                    <option value={tech.nome} key={tech.id} id={tech.id}>
                                                        {tech.nome}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>Sem tecnologias disponíveis</option> // Se não houver techsToSelect, mostramos uma opção desabilitada
                                            )}
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
                                            <div key={tech.id} style={styles.techItem}>
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
                                        Selecione no mínimo 5 e no máximo 30 habilidades
                                    </label>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "2.5%", width: "98%" }}>
                                        <select
                                            name="skills"
                                            id="skills"
                                            style={styles.input}
                                            onChange={(e) => setSkillInput(e.target.value)}
                                        >
                                            {skillsToSelect && skillsToSelect.length > 0 ? (
                                                skillsToSelect.map(skill => (
                                                    <option value={skill.nome} key={skill.id} id={skill.id}>
                                                        {skill.nome}
                                                    </option>
                                                ))
                                            ) : (
                                                <option disabled>Sem habilidades disponíveis</option> // Se não houver skillsToSelect, mostramos uma opção desabilitada
                                            )}
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
                                            <div key={skill.id} style={styles.techItem}>
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
                                Salvar
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

export default EditServiceForm;
