import React, { useState } from "react";

function ProposalsComponent() {
  const [selectedProposal, setSelectedProposal] = useState(null);

  const proposals = [
    { id: 1, type: "Proposta de servico", sender: "Kaue Oliveira", daysAgo: 10 },
    { id: 2, type: "Proposta de contratacao", sender: "Kaue Oliveira", daysAgo: 10 },
    { id: 3, type: "Proposta de contratacao", sender: "Kaue Oliveira", daysAgo: 10 },
    { id: 4, type: "Proposta de contratacao", sender: "Kaue Oliveira", daysAgo: 10 },
  ];

  const handleViewClick = (proposalId) => {
    setSelectedProposal(proposals.find((p) => p.id === proposalId));
  };

  const handleCloseOverlay = () => {
    setSelectedProposal(null);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", width: "96%" }}>
      <h2>Propostas recebidas</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <span>
              <strong>#{proposal.id} - {proposal.type}:</strong> recebida de <strong>{proposal.sender}</strong> há {proposal.daysAgo} dias
            </span>
            <button
              onClick={() => handleViewClick(proposal.id)}
              style={{
                backgroundColor: "#d4fcd6",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Visualizar
            </button>
          </div>
        ))}
      </div>

      {selectedProposal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
                backgroundColor: "white",
                borderRadius: "8px",
                padding: "20px",
                width: "400px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                width: "50%",
                height: "60%"
            }}
          >
            <h3>{selectedProposal.type} Freelancer recebida de {selectedProposal.sender}</h3>
            <p>Recebida há {selectedProposal.daysAgo} dias</p>
            <p>
              Prezado Paulo Henrique,
              <br />
              Estou entrando em contato para propor uma colaboração freelancer com você devido à sua experiência...
            </p>
            <button
              onClick={handleCloseOverlay}
              style={{
                backgroundColor: "#f8d7da",
                border: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProposalsComponent;
