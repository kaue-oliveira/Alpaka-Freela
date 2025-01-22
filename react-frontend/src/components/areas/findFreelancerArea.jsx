import React, { useState, useEffect } from "react";
import styles from "../../css/home.module.css";

import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png";
import PostHeader from "../fixed/headerPost";
import FreelancerCard from "../cards/freelancerCard";
import ServiceForm from "../forms/serviceForm";
import SendContractProposalForm from "../forms/sendContractProposalForm";
import CompleteVisualizationFreelancerCard from "../cards/completeVisualizationFreelancerCard";
import Images from "../fixed/images";
import MessageCard from "../cards/messageCard";

export default function FindFreelancerArea() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Controle do overlay
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal, post_service ou complete_view)
    const [overlayActiveCardId, setOverlayActiveCardId] = useState(0);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");
    const [servicePosts, setServicePosts] = useState([]);

    const [sendingProposalTo, setSendingProposalTo] = useState(0); 

    const backendDomain = process.env.BACKEND_DOMAIN;


    useEffect(() => {
        const fetchServicePosts = async () => {
            try {
                const response = await fetch(backendDomain + '/ofertas-servico', {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setServicePosts([]);
                    for (let i = 0; i < result.length; i++) {
                        handleNewServicePost(result[i]);
                    }
                } else {
                    console.log("erro ao fazer fetch nas ofertas de servico");
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchServicePosts();
    }, []);

    const toggleOverlay = (type) => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType(type || ""); // Define o tipo do overlay, ou limpa se estiver fechando
    };

    const handleContractProposalRequest = (ofertaId, usernameUsuario) => {
        setSendingProposalTo({ofertaId, usernameUsuario})
        toggleOverlay("contract_proposal");
    };

    const handlePostService = () => {
        toggleOverlay("post_service");
    };

    const handleCompleteVisualizationService = (id) => {
        setOverlayActiveCardId(id);
        toggleOverlay("complete_view");
    };

    const handleSucessForm = (message) => {
        setOverlayType("message_popup");
        setSucessPopupMessage(message);
    }

    const handleNewServicePost = (postData) => {
        let habilidades = [];
        let tecnologias = [];

        for (let i = 0; i < postData.habilidades.length; i++) {
            habilidades.push(postData.habilidades[i].nome);
        }

        for (let i = 0; i < postData.tecnologias.length; i++) {
            tecnologias.push(postData.tecnologias[i].nome);
        }

        postData.habilidades = habilidades;
        postData.tecnologias = tecnologias;

        setServicePosts((prevPosts) => [...prevPosts, postData]);
    };

    return (
        <div className={styles["middle-space"]}>
            <PostHeader
                title="Encontrar um Freelancer"
                buttonTitle="Cadastrar oferta de serviço"
                icon={manTechEmoji}
                onPost={handlePostService}
            />
            <div className={styles["freelancer-cards"]}>
                {servicePosts && servicePosts.map((servicePost, index) => (
                    <FreelancerCard
                        key={index}
                        onContractProposal={() => handleContractProposalRequest(servicePost.id, servicePost.usernameUsuario)}
                        onCompleteVisualization={
                            () => handleCompleteVisualizationService(servicePost.id)
                        }
                        name={servicePost.nomeUsuario}
                        nickname={servicePost.usernameUsuario}
                        hourValue={servicePost.valorCobrado}
                        description={servicePost.descricao}
                        skills={servicePost.habilidades}
                        techs={servicePost.tecnologias}
                        profileImage={servicePost.profileImage}
                    />
                ))}
            </div>



            {isOverlayOpen && overlayType === "contract_proposal" && (
                <SendContractProposalForm
                    onClose={() => toggleOverlay()}
                    onSucess={(message) => handleSucessForm(message)}
                    serviceData={sendingProposalTo}
                />
            )}
            {isOverlayOpen && overlayType === "post_service" && (
                <ServiceForm
                    onClose={() => toggleOverlay()}
                    onSucess={(message) => handleSucessForm(message)}
                    newServicePost={(postData) => handleNewServicePost(postData)}
                />
            )}
            {isOverlayOpen && overlayType === "complete_view" && (
                <CompleteVisualizationFreelancerCard
                    key={overlayActiveCardId}
                    onClose={() => toggleOverlay()}
                    id={overlayActiveCardId}
                />
            )}
            {overlayType === "message_popup" && (
                <MessageCard
                    onClose={() => toggleOverlay()}
                    message={sucessPopupMessage}
                />
            )}



        </div>
    );
}
