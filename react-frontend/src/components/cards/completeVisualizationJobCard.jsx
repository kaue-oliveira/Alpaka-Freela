import React from "react";
import { useEffect, useState } from "react";
import Images from "../fixed/images";
import { motion } from "framer-motion";

const CompleteVisualizationJobCard = ({ onClose, id }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [payment, setPayment] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [techs, setTechs] = useState([]);
    const [profileImage, setProfileImage] = useState("");
    const [fetchingData, setFetchingData] = useState(false);

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        const fetchJobPost = async () => {
            setFetchingData(true);

            try {
                const response = await fetch(backendDomain + '/ofertas-trabalho/' + id, {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                console.log(result);

                if (response.ok) {
                    setTitle(result.titulo)
                    setDescription(result.descricao);
                    setPayment(result.pagamento)
                    setName(result.nomeUsuario);
                    setUsername(result.usernameUsuario);
                    setProfileImage(result.profileImage);

                    let tmpTechs = [];

                    for (let i = 0; i < result.tecnologias.length; i++) {
                        tmpTechs.push(result.tecnologias[i].nome);
                    }

                    setTechs(tmpTechs);
                } else {
                    console.log("erro ao fazer fetch na oferta de trabalho buscada");
                }
            } catch (error) {
                console.log(error);
            }

            setFetchingData(false);
        }

        fetchJobPost();
    }, []);


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.overlay}>
                {!fetchingData && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={styles.container}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "0" }}>
                            <div>
                                <h2 style={styles.title}>{title}</h2>
                                <p style={styles.publisher}>
                                    Publicado por{" "}
                                    <strong>{username} ({name})</strong>
                                </p>
                            </div>
                            <img style={{ width: "50px", height: "50px", borderRadius: "100%" }} src={profileImage ? profileImage : Images.profileImage} alt="" />
                        </div>
                        <p style={styles.description}>
                            {description}
                        </p>
                        <p style={styles.payment}>
                            <span style={styles.paymentAmount}>Pagamento: R$ {payment}</span>
                        </p>
                        <div style={styles.techs}>
                            {techs.map((skill, index) => (
                                <div style={styles.skillButton} key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <div
                            style={{ display: "flex", flexDirection: "row", gap: "2%" }}
                        >
                            <button style={styles.proposalButton} onClick={onClose}>
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
    container: {
        width: "70%",
        height: "auto",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "20px",
        color: "#000000",
        fontWeight: "bold",
        marginBottom: "10px",
        marginTop: "0px",
    },
    publisher: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        color: "#000000",
        lineHeight: "1.6",
        marginBottom: "10px",
        overflow: "auto",
        maxHeight: "350px",
        lineHeight: "1.5",
        paddingRight: "10px",
        wordWrap: "break-word",
        wordBreak: "break-word",
        whiteSpace: "normal",
    },
    payment: {
        fontSize: "16px",
        color: "#444",
        margin: "10px 0",
    },
    paymentAmount: {
        color: "green",
        fontWeight: "bold",
    },
    techs: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        margin: "10px 0",
    },
    skillButton: {
        padding: "8px 12px",
        backgroundColor: "#ead7ff",
        color: "#000000",
        border: "1px solid #000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "800",
    },
    proposalButton: {
        padding: "10px 20px",
        fontSize: "15px",
        backgroundColor: "#b8dbda",
        border: "1px solid #000000",
        color: "#000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        width: "100%",
    },
};

export default CompleteVisualizationJobCard;
