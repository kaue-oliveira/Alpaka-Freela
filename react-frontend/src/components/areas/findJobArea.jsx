import React, { useState, useEffect } from "react";

import styles from "../../css/home.module.css";

import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png";
import boxEmoji from "../../img/package_1f4e6.png";
import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png";
import briefCaseEmoji from "../../img/briefcase_1f4bc.png";
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png";
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png";
import pushpinEmoji from "../../img/pushpin_1f4cc.png";
import laptopEmoji from "../../img/laptop_1f4bb.png";
import dragonEmoji from "../../img/dragon_1f409.png";

import PostHeader from "../fixed/headerPost";
import JobCard from "../cards/jobCard";
import JobForm from "../forms/jobForm";
import SendServiceProposalForm from "../forms/sendServiceProposalForm";
import CompleteVisualizationJobCard from "../cards/completeVisualizationJobCard";
import Images from "../fixed/images";
import MessageCard from "../cards/messageCard";
import JobCardEmpty from "../cards/jobCardEmpty";

export default function FindWorkArea() {
    const [fetchingJobPosts, setFetchingJobPosts] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Controle do overlay
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal ou post_service)
    const [overlayActiveCardId, setOverlayActiveId] = useState(0);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");
    const [jobPosts, setJobPosts] = useState([]);
    const [sendingProposalTo, setSendingProposalTo] = useState(0);

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        const fetchJobPosts = async () => {
            setFetchingJobPosts(true);

            try {
                const response = await fetch(backendDomain + '/ofertas-trabalho', {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setJobPosts([]);
                    for (let i = 0; i < result.length; i++) {
                        handleNewJobPost(result[i]);
                    }
                } else {
                    console.log("erro ao fazer fetch nas ofertas de servico");
                }
            } catch (error) {
                console.log(error);
            }

            setFetchingJobPosts(false);
        }

        fetchJobPosts();
    }, []);

    const toggleOverlay = (type) => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType(type || ""); // Define o tipo do overlay, ou limpa se estiver fechando
    };

    const handleServiceProposalRequest = (ofertaId, usernameUsuario) => {
        setSendingProposalTo({ ofertaId, usernameUsuario })
        toggleOverlay("service_proposal");
        console.log("service_proposal");
    };

    const handlePostJob = () => {
        toggleOverlay("post_job");
        console.log("post_job");
    };

    const handleCompleteVisualizationService = (id) => {
        toggleOverlay("complete_view");
        setOverlayActiveId(id);
    };

    const handleSucessForm = (message) => {
        setOverlayType("message_popup");
        setSucessPopupMessage(message);
    }

    const handleNewJobPost = (postData) => {
        let tecnologias = [];

        for (let i = 0; i < postData.tecnologias.length; i++) {
            tecnologias.push(postData.tecnologias[i].nome);
        }

        postData.tecnologias = tecnologias;

        setJobPosts((prevPosts) => [...prevPosts, postData]);
    };

    return (
        <div className={styles["middle-space"]}>
            <PostHeader
                title="Encontrar um Trabalho"
                buttonTitle="Cadastrar oferta de trabalho"
                icon={briefCaseEmoji}
                onPost={handlePostJob}
            />
            <div className={styles["job-cards"]}>
                {fetchingJobPosts &&
                    Array.from({ length: 6 }).map((_, index) => (
                        <JobCardEmpty key={index} />
                    ))}
                {jobPosts.map((job, index) => (
                    <JobCard
                        key={index}
                        onServiceProposal={() => handleServiceProposalRequest(job.id, job.usernameUsuario)}
                        onCompleteVisualization={() => handleCompleteVisualizationService(job.id)}
                        title={job.titulo}
                        name={job.nomeUsuario}
                        username={job.usernameUsuario}
                        description={job.descricao}
                        payment={job.pagamento}
                        skills={job.tecnologias}
                        profileImage={job.profileImage}
                    />
                ))}
            </div>
            {/* Renderiza o overlay de acordo com o tipo */}
            {isOverlayOpen && overlayType === "service_proposal" && (
                <SendServiceProposalForm
                    onClose={() => toggleOverlay()}
                    onSucess={(message) => handleSucessForm(message)}
                    serviceData={sendingProposalTo}
                />
            )}
            {isOverlayOpen && overlayType === "post_job" && (
                <JobForm
                    onClose={() => toggleOverlay()}
                    onSucess={(message) => handleSucessForm(message)}
                    newJobPost={(postData) => handleNewJobPost(postData)}
                />
            )}
            {isOverlayOpen && overlayType === "complete_view" && (
                <CompleteVisualizationJobCard
                    onClose={() => toggleOverlay()}
                    key={overlayActiveCardId}
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
