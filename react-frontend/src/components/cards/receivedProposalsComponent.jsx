import React, { useState } from "react";
import styled from "styled-components";

function ReceivedProposalsComponent({ onClose }) {
    const proposals = [
        {
            id: 1,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.",
        },
        {
            id: 2,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 3,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance. Sou um desenvolvedor especializado em Java com experiência sólida no ecossistema Spring Boot. Tenho paixão por criar soluções eficientes e escaláveis, e já trabalhei em projetos que envolvem tanto APIs RESTful quanto integrações complexas. Além disso, possuo conhecimentos em Angular para criar interfaces intuitivas e dinâmicas, e utilizo os serviços da AWS para garantir a melhor performance.",
        },
        {
            id: 4,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 5,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 6,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 7,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 8,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 9,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
        {
            id: 10,
            type: "Proposta de servico",
            sender: "Kaue Oliveira",
            description: "fdgdfgdgdg"
        },
    ];

    return (
        <div style={styles.overlay}>

            <div
                style={styles.container}
            >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "0" }}>
                    <h2 style={{flex: "2", margin: "0"}}>Propostas recebidas</h2>
                    <button style={styles.button} onClick={onClose}>Fechar</button>
                </div>
                <ScrollContainerPurple style={{ height: "100%", boxSizing: "border-box", }}>
                    <div style={styles.proposals}>
                        {proposals.map((proposal) => (
                            <div
                                key={proposal.id}
                                style={{
                                    border: "1px solid #000000",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "start",
                                    backgroundColor: "#fff",
                                    flexDirection: "column",
                                    width: "98.5%",
                                    boxSizing: "border-box",
                                }}
                            >
                                <span>
                                    <strong>
                                        #{proposal.id} - {proposal.type}:
                                    </strong>{" "}
                                    recebida de <strong>{proposal.sender}</strong>
                                </span>
                                <div style={{ maxHeight: "30vh", overflow: "auto" }}>
                                    <p style={{ width:"98%" }}>{proposal.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollContainerPurple>
            </div>
        </div>
    );
}

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
        marginTop: "6vh",
        height: "80vh",
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "2.5%"
    },
    proposals: {
        overflow: "auto",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        gap: "2.5%",
        width: "100%",
        boxSizing: "border-box",
    },
    button: {
        padding: "10px 20px",
        width: "20%",
        backgroundColor: "#ffb2b9",
        border: "1px solid #000000",
        color: "#000000",
        fontSize: "15px",
        fontWeight: "600",
        borderRadius: "5px",
        cursor: "pointer",
        flex: "1",
    },
}


const ScrollContainerPurple = styled.div`

  ::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
    border: 1px #000 solid;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #ead7ff;
    border: 1px #000 solid;
  }
`;

export default ReceivedProposalsComponent;
