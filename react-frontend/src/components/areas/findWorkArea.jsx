import React, { useState } from "react";

import styles from "../../css/home.module.css" 

import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import boxEmoji from "../../img/package_1f4e6.png"
import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../../img/briefcase_1f4bc.png"
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png"
import pushpinEmoji from "../../img/pushpin_1f4cc.png"
import laptopEmoji from "../../img/laptop_1f4bb.png"
import rocketEmoji from "../../img/rocket_1f680.png"
import dragonEmoji from "../../img/dragon_1f409.png"

import PostHeader from "../fixed/headerPost"
import JobCard from "../cards/jobCard"
import JobForm from "../forms/jobForm"
import SendServiceProposalForm from "../forms/sendServiceProposalForm";

export default function FindWorkArea() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Controle do overlay
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal ou post_service)
  
    const toggleOverlay = (type) => {
      setIsOverlayOpen(!isOverlayOpen);
      setOverlayType(type || ""); // Define o tipo do overlay, ou limpa se estiver fechando
    };
  
    const handleServiceProposalRequest = () => {
      toggleOverlay("service_proposal");
      console.log("service_proposal");
    };
  
    const handlePostJob = () => {
      toggleOverlay("post_job");
      console.log("post_job");
      
    };

    return (
        <div className={styles["middle-space"]}>
        <PostHeader 
            title="Encontrar um Trabalho" 
            buttonTitle="Cadastrar oferta de trabalho"
            icon={briefCaseEmoji}
            onPost={handlePostJob}
        />
        <div className={styles["cards"]}>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
            <JobCard onServiceProposal={handleServiceProposalRequest}/>
        </div>
        {/* Renderiza o overlay de acordo com o tipo */}
        {isOverlayOpen && overlayType === "service_proposal" && (
            <SendServiceProposalForm onClose={() => toggleOverlay()} />
        )}
        {isOverlayOpen && overlayType === "post_job" && (
            <JobForm onClose={() => toggleOverlay()} />
        )}
    </div>
    )
}