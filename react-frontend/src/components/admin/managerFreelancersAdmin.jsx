import React, { useState, useEffect } from "react";
import styles from "../../css/home.module.css";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditServiceForm from "../forms/editServiceForm";
import FreelancerCardForManager from "../cards/freelancerCardForManager";
import Images from "../fixed/images";
import MessageCard from "../cards/messageCard";
import ReceivedProposalsComponent from "../cards/receivedProposalsComponent";
import { motion } from 'framer-motion';
import HeaderAreaSwitcher from "../fixed/headerAreaSwitcher";

export default function ManagerFreelancersAdmin() {
    const [freelancers, setFreelancers] = useState([]); // card a ser gerenciado
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
            setFreelancers(freelancers.filter((_, i) => i !== cardToManager));
            setCardToManager(null);

            setOverlayType("message_popup");
            setSucessPopupMessage("Oferta de serviço excluida com sucesso.");
        }
    };

    const handleClosePopup = () => {
        setCardToManager(null);
        toggleOverlay();
    };

    useEffect(() => {
        setFreelancers([
            {
                name: "Paulo Henrique dos Anjos Silveira",
                nickname: "silveiraprecheco69",
                hourValue: 52.69,
                description: "Olá! Meu nome é Paulo, e sou um desenvolvedor especializado em \"codar fofo\" 🐾✨. Minha missão é transformar linhas de código em experiências encantadoras, funcionais e cheias de personalidade! Quando não estou alinhando pixels como se fossem estrelas no céu 🌌 ou organizando o código como uma prateleira perfeitamente etiquetada, estou pensando em como deixar a tecnologia tão amigável quanto um gatinho ronronando no colo. 🐱✨",
                skills: ["Comunicação", "Trabalho em Equipe", "Resolução de problemas", "Pensamento crítico", "Flexibilidade", "Criatividade", "Liderança", "Tomada de decisão", "Organização", "Proatividade", "Trabalho sob pressão", "Atenção aos detalhes", "Empatia", "Negociação", "Habilidade analítica", "Adaptabilidade", "Colaboração", "Motivação pessoal", "Colaboração", "Gestão de conflitos", "Planejamento estratégico", "Conhecimento técnico", "Disciplina"],
                techs: ["Frontend LGBT", "Backend Fofo", "Figma gay"],
                profileImage: Images.imagePaulo
            },
            {
                name: "Paulo Henrique Ribeiro Alves",
                nickname: "paulo2",
                hourValue: 40,
                description: "Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.",
                skills: ["Proatividade", "Trabalho sob pressão", "Atenção aos detalhes", "Empatia", "Negociação", "Habilidade analítica", "Adaptabilidade", "Colaboração", "Motivação pessoal", "Colaboração", "Gestão de conflitos", "Planejamento estratégico", "Conhecimento técnico", "Disciplina"],
                techs: ["C++", "Java", "Figma"],
            },
            {
                name: "Paulo Henrique Ribeiro Alves",
                nickname: "paulo3",
                hourValue: 40,
                description: "Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.",
                skills: ["Habilidade analítica", "Adaptabilidade", "Colaboração", "Motivação pessoal", "Colaboração", "Gestão de conflitos", "Planejamento estratégico", "Conhecimento técnico", "Disciplina"],
                techs: ["C++", "Java", "Figma"],
            },
            {
                name: "Paulo Henrique Ribeiro Alves",
                nickname: "paulo4",
                hourValue: 40,
                description: "Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.",
                skills: ["Proatividade", "Trabalho sob pressão", "Atenção aos detalhes", "Empatia", "Negociação", "Habilidade analítica", "Adaptabilidade", "Colaboração", "Motivação pessoal", "Colaboração", "Gestão de conflitos", "Planejamento estratégico", "Conhecimento técnico", "Disciplina"],
                techs: ["C++", "Java", "Figma"],
            },
            {
                name: "Paulo Henrique Ribeiro Alves",
                nickname: "paulo5",
                hourValue: 40,
                description: "Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.",
                skills: ["Negociação", "Habilidade analítica", "Adaptabilidade", "Colaboração", "Motivação pessoal", "Colaboração", "Gestão de conflitos", "Planejamento estratégico", "Conhecimento técnico", "Disciplina"],
                techs: ["C++", "Java", "Figma"],
            }
        ]);
    }, []);



    // <div className={styles["edit-account-form-container"]}>
    //     {renderCurrentComponent()}
    // </div>



    return (

        <div className={styles["middle-space"]}>
            <div className={styles["freelancer-cards"]} style={{ marginTop: "0" }}>
                {freelancers.map((freelancer, index) => (
                    <FreelancerCardForManager
                        key={index}
                        index={index}
                        onDelete={() => handleDeleteRequest(index)}
                        onEdit={() => handleEditRequest(index)}
                        name={freelancer.name}
                        nickname={freelancer.nickname}
                        hourValue={freelancer.hourValue}
                        description={freelancer.description}
                        skills={freelancer.skills}
                        techs={freelancer.techs}
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
                            onSucess={(message) => handleSucessForm(message)}
                            freelancerCard={freelancers[cardToManager]}
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
        </div>

    );
}
