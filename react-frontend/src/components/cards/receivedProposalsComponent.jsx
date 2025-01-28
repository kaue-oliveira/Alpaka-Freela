import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Images from "../fixed/images";

function ReceivedProposalsComponent({ onClose, ofertaId, ofertaType }) {
    const [proposals, setProposals] = useState(null);

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        let url = backendDomain + '/propostas/oferta/' + ofertaId + "?tipo=SERVICO";
        
        if (ofertaType === "CONTRATACAO") {  
            url = backendDomain + '/propostas/oferta/' + ofertaId + "?tipo=CONTRATACAO";
        }

        const fetchReceivedProposals = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setProposals(result);
                    console.log(result);
                    
                } else {
                    console.log("erro ao fazer fetch nas ofertas de servico");
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchReceivedProposals();
    }, []);

    return (
        <div style={styles.overlay}>

            <div
                style={styles.container}
            >
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "0" }}>
                    <h2 style={{ flex: "2", margin: "0" }}>Propostas recebidas</h2>
                    <button style={styles.button} onClick={onClose}>Fechar</button>
                </div>
                <ScrollContainerPurple style={{ height: "100%", boxSizing: "border-box", width: "100%" }}>
                    <div style={styles.proposals}>
                        {proposals && proposals.length > 0 && (
                            proposals.map((proposal) => (
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
                                            #{proposal.id} | {proposal.tipoProposta === "SERVICO" ? "Proposta de serviço" : "Proposta de contratação"}
                                        </strong>{" "}
                                        recebida de <strong>{proposal.dadosRecebedor.name} - {proposal.dadosRecebedor.username}</strong>
                                    </span>
                                    <div style={{ maxHeight: "30vh", overflow: "auto", width: "100%" }}>
                                        <p style={{ width: "100%", wordWrap: "break-word", wordBreak: "break-word", whiteSpace: "pre-wrap" }}>{proposal.descricao}</p>
                                    </div>
                                </div>
                            ))
                        )}
                        {proposals && proposals.length === 0 && (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                <img src={Images.sadAlpaka} alt="" style={{ width: "200px" }} />
                                <p style={{ fontWeight: "600", fontSize: "18px", padding: "30px", borderTop: "1px solid #000000", borderBottom: "1px solid #000000", marginTop: "40px" }}>
                                    Nenhuma proposta recebida ainda.
                                </p>
                            </div>
                        )}
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
        display: "flex",
        alignItems: "center",
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
