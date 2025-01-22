import React from "react";
import { useEffect, useState } from "react";
import Images from "../fixed/images";
import { motion } from "framer-motion";

const CompleteVisualizationFreelancerCard = ({ onClose, id }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [hourValue, setHourValue] = useState("");
    const [description, setDescription] = useState("");
    const [techs, setTechs] = useState([]);
    const [skills, setSkills] = useState([]);
    const [profileImage, setProfileImage] = useState("");
    const [fetchingData, setFetchingData] = useState(false);

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        const fetchServicePost = async () => {
            setFetchingData(true);

            try {
                const response = await fetch(backendDomain + '/ofertas-servico/' + id, {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                console.log(result);

                if (response.ok) {
                    setName(result.nomeUsuario);
                    setUsername(result.usernameUsuario);
                    setHourValue(result.valorCobrado);
                    setDescription(result.descricao);
                    setProfileImage(result.profileImage);

                    let tmpSkills = [];
                    let tmpTechs = [];

                    for (let i = 0; i < result.habilidades.length; i++) {
                        tmpSkills.push(result.habilidades[i].nome);
                    }

                    for (let i = 0; i < result.tecnologias.length; i++) {
                        tmpTechs.push(result.tecnologias[i].nome);
                    }

                    setSkills(tmpSkills);
                    setTechs(tmpTechs);
                } else {
                    console.log("erro ao fazer fetch na oferta de servico buscada");
                }
            } catch (error) {
                console.log(error);
            }

            setFetchingData(false);
        }

        fetchServicePost();
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.overlay}>
                {!fetchingData && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={styles.container}>
                        <div style={styles.profileDetails}>
                            <h3 style={styles.name}>{name}</h3>
                            <p style={styles.price}>Valor cobrado por hora: R$ {hourValue}</p>
                        </div>
                        <div style={{ width: "100%" }}>
                            <img
                                src={profileImage ? profileImage : Images.profileImage} // Substitua com a URL do ícone ou foto do perfil
                                alt="Profile"
                                style={styles.profileImage}
                            />
                        </div>
                        <div style={styles.profileHeader}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={styles.username}>
                                    Publicado por <p style={{ fontWeight: "bold", margin: "0", marginLeft: "0.2%" }}>{username}</p>
                                </div>
                                <p style={styles.description}>
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div style={styles.skills}>
                            {skills.map((skill, index) => (
                                <div style={styles.skillButton} key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <div style={styles.techs}>
                            {techs.map((tech, index) => (
                                <div style={styles.techButton} key={index}>
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div
                            style={{ display: "flex", flexDirection: "row", gap: "2%", width: "100%" }}
                        >
                            <button style={styles.contractButton} onClick={onClose}>
                                Fechar
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    fetchingData: {
        width: "70%",
        height: "auto",
        height: "50vh",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    container: {
        width: "70%",
        height: "auto",
        maxHeight: "70vh",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    profileHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        marginTop: "10px",
        marginBottom: "15px",
        width: "100%"
    },
    profileImage: {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        marginRight: "15px",
    },
    profileDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2%",
        marginBottom: "10px",
        width: "100%"
    },
    name: {
        fontSize: "18px",
        fontWeight: "bold",
        margin: 0,
    },
    username: {
        fontSize: "14px",
        color: "#000000",
        margin: 0,
        display: "flex"
    },
    price: {
        fontSize: "16px",
        color: "#28a745",
        fontWeight: "bold",
        margin: "0",
    },
    description: {
        fontSize: "14px",
        color: "#000000",
        marginBottom: "0",
        overflow: "auto",
        maxHeight: "27vh",
        lineHeight: "1.5",
        paddingRight: "10px",
        wordWrap: "break-word",
        wordBreak: "break-word",
        whiteSpace: "normal",
    },
    skills: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "10px",
        maxHeight: "12vh",
        overflow: "auto"
    },
    skillButton: {
        padding: "6px 12px",
        fontSize: "13px",
        backgroundColor: "#9cffbf",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#000000",
        border: "1px solid #000000",
        fontWeight: "800",
    },
    techs: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "10px",
        width: "100%"
    },
    techButton: {
        padding: "6px 12px",
        fontSize: "13px",
        backgroundColor: "#ead7ff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#000000",
        border: "1px solid #000000",
        fontWeight: "600",
    },
    contractButton: {
        padding: "10px 20px",
        backgroundColor: "#b8dbda",
        border: "1px solid #000000",
        color: "#000000",
        fontSize: "15px",
        fontWeight: "600",
        borderRadius: "5px",
        cursor: "pointer",
        width: "100%",
        flex: "1",
    },
};

export default CompleteVisualizationFreelancerCard;
