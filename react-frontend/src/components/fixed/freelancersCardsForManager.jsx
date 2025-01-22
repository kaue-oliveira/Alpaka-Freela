import React, { useState, useEffect } from "react";
import styles from "../../css/home.module.css";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditServiceForm from "../forms/editServiceForm";
import FreelancerCardForManager from "../cards/freelancerCardForManager";
import Images from "./images";
import MessageCard from "../cards/messageCard";
import ReceivedProposalsComponent from "../cards/receivedProposalsComponent";
import { motion } from 'framer-motion';

export default function FreelancerCardsForManager() {
    const [freelancers, setFreelancers] = useState([]); // card a ser gerenciado
    const [cardToManager, setCardToManager] = useState(0); // card a ser gerenciado
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal, post_service ou complete_view)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");
    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        fetchUserPosts();
    }, []);

    const fetchUserPosts = async () => {
        try {
            const response = await fetch(backendDomain + '/ofertas-servico/usuario', {
                method: 'GET',
                credentials: "include",
            });

            const result = await response.json();

            if (response.ok) {
                let postsData = result;

                for (let i = 0; i < postsData.length; i++) {
                    let habilidades = [];
                    let tecnologias = [];

                    for (let j = 0; j < postsData[i].habilidades.length; j++) {
                        habilidades.push(postsData[i].habilidades[j].nome);
                    }

                    for (let j = 0; j < postsData[i].tecnologias.length; j++) {
                        tecnologias.push(postsData[i].tecnologias[j].nome);
                    }

                    postsData[i].habilidades = habilidades;
                    postsData[i].tecnologias = tecnologias;
                }

                setFreelancers(postsData);
            } else {
                console.log("erro ao fazer fetch nas ofertas de servico do usuario");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType("");
    };

    const handleDeleteRequest = (id) => {
        setCardToManager(id); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("delete");
    };

    const handleEditRequest = (id) => {
        setCardToManager(id); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("edit");
    };

    const handleVisualizeProposals = (index) => {
        setCardToManager(index); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("visualize");
    };

    const handleSucessForm = (message) => {
        setOverlayType("message_popup");
        setSucessPopupMessage(message);
    }

    const handleConfirmDelete = async () => {
        if (cardToManager !== null) {
            try {
                const response = await fetch(backendDomain + '/ofertas-servico/' + cardToManager, {
                    method: 'DELETE',
                    credentials: "include",
                });

                const result = await response.json();

                console.log(result);

                setOverlayType("message_popup");
                setSucessPopupMessage(result);
                
                if (response.ok) {
                    setFreelancers(freelancers.filter((freelancer) => freelancer.id !== cardToManager));
                    setCardToManager(null);
                } 
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleClosePopup = () => {
        setCardToManager(null);
        toggleOverlay();
    };

    return (
        <div className={styles["freelancer-cards"]}>
            {freelancers && freelancers.map((freelancer, index) => (
                <FreelancerCardForManager
                    key={index}
                    index={index}
                    onDelete={() => handleDeleteRequest(freelancer.id)}
                    onEdit={() => handleEditRequest(freelancer.id)}
                    onVisualizeProposals={() => handleVisualizeProposals(index)}
                    id={freelancer.id}
                    name={freelancer.nomeUsuario}
                    nickname={freelancer.usernameUsuario}
                    hourValue={freelancer.valorCobrado}
                    description={freelancer.descricao}
                    skills={freelancer.habilidades}
                    techs={freelancer.tecnologias}
                    profileImage={freelancer.profileImage}
                />
            ))}


            {isOverlayOpen && overlayType === "delete" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <DeleteConfirmationPopup
                        onClose={handleClosePopup}
                        onConfirm={handleConfirmDelete}
                    />
                </motion.div>
            )}

            {isOverlayOpen && overlayType === "edit" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <EditServiceForm
                        onClose={() => toggleOverlay()}
                        onSubmit={(message) => handleSucessForm(message)}
                        onUpdatedService={(updatedServiceData) => 
                            setFreelancers(freelancers.map(freelancer => 
                                freelancer.id === updatedServiceData.id ? updatedServiceData : freelancer
                            ))
                        }
                        id={cardToManager}
                    />
                </motion.div>
            )}

            {isOverlayOpen && overlayType === "visualize" && (
                <ReceivedProposalsComponent onClose={() => toggleOverlay()} />
            )}

            {overlayType === "message_popup" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <MessageCard
                        onClose={() => toggleOverlay()}
                        message={sucessPopupMessage}
                    />
                </motion.div>
            )}



        </div >
    );
}
