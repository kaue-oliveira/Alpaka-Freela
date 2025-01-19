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
    const [overlayActiveCardIndex, setOverlayActiveCardIndex] = useState(0);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");


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

    const handleCompleteVisualizationService = (index) => {
        setOverlayActiveCardIndex(index);
        toggleOverlay("complete_view");
    };

    const handleSucessForm = (message) => {
        setOverlayType("message_popup");
        setSucessPopupMessage(message);
    }




    const freelancers = [
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
    ]





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
                            () => handleCompleteVisualizationService(index)
                        }
                        name={freelancers[index].name}
                        nickname={freelancers[index].nickname}
                        hourValue={freelancers[index].hourValue}
                        description={freelancers[index].description}
                        skills={freelancers[index].skills}
                        techs={freelancers[index].techs}
                        profileImage={freelancers[index].profileImage}
                    />
                ))}
            </div>



            {isOverlayOpen && overlayType === "contract_proposal" && (
                <SendContractProposalForm 
                    onClose={() => toggleOverlay()} 
                    onSucess={(message) => handleSucessForm(message)}
                />
            )}
            {isOverlayOpen && overlayType === "post_service" && (
                <ServiceForm
                    onClose={() => toggleOverlay()}
                    onSucess={(message) => handleSucessForm(message)}
                />
            )}
            {isOverlayOpen && overlayType === "complete_view" && (
                <CompleteVisualizationFreelancerCard
                    key={overlayActiveCardIndex}
                    onClose={() => toggleOverlay()}
                    name={freelancers[overlayActiveCardIndex].name}
                    nickname={freelancers[overlayActiveCardIndex].nickname}
                    hourValue={freelancers[overlayActiveCardIndex].hourValue}
                    description={freelancers[overlayActiveCardIndex].description}
                    skills={freelancers[overlayActiveCardIndex].skills}
                    techs={freelancers[overlayActiveCardIndex].techs}
                    profileImage={freelancers[overlayActiveCardIndex].profileImage}
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
