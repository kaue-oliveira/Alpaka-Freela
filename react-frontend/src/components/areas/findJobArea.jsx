import React, { useState } from "react";

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

export default function FindWorkArea() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Controle do overlay
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal ou post_service)
    const [overlayActiveCardIndex, setOverlayActiveCardIndex] = useState(0);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");

    const jobs = [
        {
            title: "Programador Frontend",
            name: "Paulo Henrique Ribeiro Alves",
            username: "paulohenrique64",
            description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
            payment: 560,
            skills: ["C++", "Figma", "C#"],
            profileImage: Images.imagePaulo
        },
        {
            title: "Programador Frontend",
            name: "Paulo Henrique Ribeiro Alves",
            username: "paulohenrique64",
            description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
            payment: 560,
            skills: ["C++", "Figma", "C#"]
        },
        {
            title: "Programador Frontend",
            name: "Paulo Henrique Ribeiro Alves",
            username: "paulohenrique64",
            description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
            payment: 560,
            skills: ["C++", "Figma", "C#"]
        },
        {
            title: "Programador Frontend",
            name: "Paulo Henrique Ribeiro Alves",
            username: "paulohenrique64",
            description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
            payment: 560,
            skills: ["C++", "Figma", "C#"]
        },
    ]

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

    const handleCompleteVisualizationService = (index) => {
        toggleOverlay("complete_view");
        setOverlayActiveCardIndex(index);
    };

    const handleSucessForm = (message) => {
        setOverlayType("message_popup");
        setSucessPopupMessage(message);
    }

    return (
        <div className={styles["middle-space"]}>
            <PostHeader
                title="Encontrar um Trabalho"
                buttonTitle="Cadastrar oferta de trabalho"
                icon={briefCaseEmoji}
                onPost={handlePostJob}
            />
            <div className={styles["job-cards"]}>
                {jobs.map((job, index) => (
                    <JobCard
                        key={index}
                        onServiceProposal={handleServiceProposalRequest}
                        onCompleteVisualization={() => handleCompleteVisualizationService(index)}
                        title={job.title}
                        name={job.name}
                        username={job.username}
                        description={job.description}
                        payment={job.payment}
                        skills={job.skills}
                        profileImage={job.profileImage}
                    />
                ))}
            </div>
            {/* Renderiza o overlay de acordo com o tipo */}
            {isOverlayOpen && overlayType === "service_proposal" && (
                <SendServiceProposalForm 
                    onClose={() => toggleOverlay()} 
                    onSucess={(message) => handleSucessForm(message)}
                />
            )}
            {isOverlayOpen && overlayType === "post_job" && (
                <JobForm
                    onClose={() => toggleOverlay()}
                    onSucess={(message) => handleSucessForm(message)}
                />
            )}
            {isOverlayOpen && overlayType === "complete_view" && (
                <CompleteVisualizationJobCard
                    onClose={() => toggleOverlay()}
                    key={overlayActiveCardIndex}
                    title={jobs[overlayActiveCardIndex].title}
                    name={jobs[overlayActiveCardIndex].name}
                    username={jobs[overlayActiveCardIndex].username}
                    description={jobs[overlayActiveCardIndex].description}
                    payment={jobs[overlayActiveCardIndex].payment}
                    skills={jobs[overlayActiveCardIndex].skills}
                    profileImage={jobs[overlayActiveCardIndex].profileImage}
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
