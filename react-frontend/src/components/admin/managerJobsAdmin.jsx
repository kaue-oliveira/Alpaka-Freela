import React, { useState, useEffect } from "react";
import styles from "../../css/home.module.css";
import JobCardForManager from "../cards/jobCardForManager";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditJobForm from "../forms/editJobForm";
import ReceivedProposalsComponent from "../cards/receivedProposalsComponent";
import MessageCard from "../cards/messageCard";

import { motion } from "framer-motion";

import Images from "../fixed/images";

export default function ManagerJobsAdmin() {
    const [jobs, setJobs] = useState([]); // card a ser gerenciado
    const [cardToManager, setCardToManager] = useState(0); // card a ser gerenciado
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal, post_service ou complete_view)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType("");
    };

    const handleDeleteRequest = (index) => {
        setCardToManager(index); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("delete");
    };

    const handleEditRequest = (index) => {
        setCardToManager(index); // Define qual card será gerenciado
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

    const handleConfirmDelete = () => {
        if (cardToManager !== null) {
            setJobs(jobs.filter((_, i) => i !== cardToManager));
            setCardToManager(null);

            setOverlayType("message_popup");
            setSucessPopupMessage("Oferta de trabalho excluida com sucesso.");
        }
    };

    const handleClosePopup = () => {
        setCardToManager(null);
        toggleOverlay();
    };



    useEffect(() => {
        setJobs([
            {
                title: "Programador Frontend",
                name: "Paulo Henrique Ribeiro Alves",
                username: "paulohenrique64",
                description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
                payment: 560,
                techs: ["C++", "Figma", "C#"],
                profileImage: Images.imagePaulo
            },
            {
                title: "Programador Frontend",
                name: "Paulo Henrique Ribeiro Alves",
                username: "paulohenrique64",
                description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
                payment: 560,
                techs: ["C++", "Figma", "C#"]
            },
            {
                title: "Programador Frontend",
                name: "Paulo Henrique Ribeiro Alves",
                username: "paulohenrique64",
                description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
                payment: 560,
                techs: ["C++", "Figma", "C#"]
            },
            {
                title: "Programador Frontend",
                name: "Paulo Henrique Ribeiro Alves",
                username: "paulohenrique64",
                description: "Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. Somos uma empresa apaixonada por tecnologia e focada em criar soluções eficientes e escaláveis para nossos clientes. Atualmente, estamos em busca de um Desenvolvedor Frontend com habilidades sólidas em HTML, CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores. CSS e Angular para integrar nossa equipe e contribuir com projetos inovadores.",
                payment: 560,
                techs: ["C++", "Figma", "C#"]
            },
        ]);
    }, []);





    return (
        <div className={styles["middle-space"]}>
            <div className={styles["job-cards"]} style={{ marginTop: "0" }}>
                {jobs.map((job, index) => (
                    <JobCardForManager
                        key={index}
                        index={index}
                        onDelete={() => handleDeleteRequest(index)}
                        onEdit={() => handleEditRequest(index)}
                        jobData={job}
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
                        <EditJobForm
                            onClose={() => toggleOverlay()}
                            onSucess={(message) => handleSucessForm(message)}
                            jobData={jobs[cardToManager]}
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

            </div>
        </div>
    );
}
