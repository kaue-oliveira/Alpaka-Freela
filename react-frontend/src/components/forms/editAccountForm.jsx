import React, { useState } from "react";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";

const EditAccountForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteAccountClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      style={{
        width: "94%",
        height: "92%",
        margin: "auto",
        padding: "20px",
        border: "1px solid #a6a6a6",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        backgroundColor: "white"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Editar informações da conta</h2>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <img
          src="default-profile.png"
          alt="Foto do perfil"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        />
        <button style={{ padding: "8px", cursor: "pointer" }}>
          Carregar nova imagem
        </button>
      </div>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Username
          </label>
          <input
            type="text"
            value="paulohenrique64"
            readOnly
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Nome
          </label>
          <input
            type="text"
            value="Paulo H. Ribeiro Alves"
            readOnly
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            value="paulo.alves1@estudante.ufla.br"
            readOnly
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Senha
          </label>
          <input
            type="password"
            value="************"
            readOnly
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            backgroundColor: "#4caf50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Salvar Alterações
        </button>
      </form>
      <button
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          backgroundColor: "#f44336",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleDeleteAccountClick}
      >
        Excluir conta
      </button>
      {showPopup && <DeleteConfirmationPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default EditAccountForm;