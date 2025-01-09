import React, { useState } from "react";
import styles from "../../css/home.module.css";

import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png";
import PostHeader from "../fixed/headerPost";
import FreelancerCard from "../cards/freelancerCard";
import ServiceForm from "../forms/serviceForm";
import SendContractProposalForm from "../forms/sendContractProposalForm";
import CompleteVisualizationFreelancerCard from "../cards/completeVisualizationFreelancerCard";

export default function FindFreelancerArea() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Controle do overlay
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal, post_service ou complete_view)

    const toggleOverlay = (type) => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType(type || ""); // Define o tipo do overlay, ou limpa se estiver fechando
    };

    const handleContractProposalRequest = () => {
        toggleOverlay("contract_proposal");
    };

    const handlePostService = () => {
        toggleOverlay("post_service");
    };

    const handleCompleteVisualizationService = () => {
        toggleOverlay("complete_view");
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
                {[...Array(5)].map((_, index) => (
                    <FreelancerCard
                        key={index}
                        onContractProposal={handleContractProposalRequest}
                        onCompleteVisualization={
                            handleCompleteVisualizationService
                        }
                    />
                ))}
            </div>

            {isOverlayOpen && overlayType === "contract_proposal" && (
                <SendContractProposalForm onClose={() => toggleOverlay()} />
            )}
            {isOverlayOpen && overlayType === "post_service" && (
                <ServiceForm onClose={() => toggleOverlay()} />
            )}
            {isOverlayOpen && overlayType === "complete_view" && (
                <CompleteVisualizationFreelancerCard
                    onClose={() => toggleOverlay()}
                />
            )}
        </div>
    );
}
