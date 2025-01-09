import React from "react";

const JobCard = ({ onServiceProposal, onCompleteVisualization }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Programador Frontend</h2>
            <p style={styles.publisher}>
                Publicado por{" "}
                <strong>paulohenrique64 (Paulo H. R. Alves)</strong> em 10/10/24
            </p>
            <p style={styles.description}>
                Somos uma empresa apaixonada por tecnologia e focada em criar
                soluções eficientes e escaláveis para nossos clientes.
                Atualmente, estamos em busca de um Desenvolvedor Frontend com
                habilidades sólidas em HTML, CSS e Angular para integrar nossa
                equipe e contribuir com projetos inovadores. CSS e Angular para
                integrar nossa equipe e contribuir com projetos inovadores.
            </p>
            <p style={styles.payment}>
                Pagamento: <span style={styles.paymentAmount}>R$ 13.000</span>
            </p>
            <div style={styles.skills}>
                <button style={styles.skillButton}>C++</button>
                <button style={styles.skillButton}>C#</button>
                <button style={styles.skillButton}>Figma</button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2%" }}>
                <button
                    style={styles.proposalButton}
                    onClick={onServiceProposal}
                >
                    Fazer uma proposta
                </button>
                <button
                    style={styles.completeVisualizationButton}
                    onClick={onCompleteVisualization}
                >
                    Visualização completa
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        aspectRatio: "4 / 1" /* Proporção de largura para altura */,
        border: "1px solid #000000",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "20px",
        color: "#000000",
        fontWeight: "bold",
        marginBottom: "10px",
        marginTop: "0px",
    },
    publisher: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "10px",
    },
    description: {
        fontSize: "14px",
        color: "#444",
        lineHeight: "1.6",
        marginBottom: "10px",
    },
    payment: {
        fontSize: "16px",
        color: "#444",
        margin: "10px 0",
    },
    paymentAmount: {
        color: "green",
        fontWeight: "bold",
    },
    skills: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        margin: "10px 0",
    },
    skillButton: {
        padding: "8px 12px",
        backgroundColor: "#ead7ff",
        color: "#000000",
        border: "1px solid #000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "800",
    },
    proposalButton: {
        padding: "10px 20px",
        fontSize: "15px",
        backgroundColor: "#baffb3",
        border: "1px solid #000000",
        color: "#000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        width: "100%",
    },
    completeVisualizationButton: {
        padding: "10px 20px",
        fontSize: "15px",
        backgroundColor: "#b8dbda",
        border: "1px solid #000000",
        color: "#000000",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        width: "100%",
    },
};

export default JobCard;
