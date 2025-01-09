import React from "react";

import Images from "../fixed/images";

const RegisterForm = () => {
  return (
    <div style={{ width: "50%" }}>
      <div
        style={{
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Criar conta
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={Images.alpakaAstronaltCloud}
            alt="Avatar"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <form style={{ width: "100%" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Insira seu username
          </label>
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ display: "block", marginBottom: "5px" }}>
            Insira seu nome
          </label>
          <input
            type="text"
            placeholder="Nome"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ display: "block", marginBottom: "5px" }}>
            Insira seu email
          </label>
          <input
            type="email"
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ display: "block", marginBottom: "5px" }}>
            Insira sua senha
          </label>
          <input
            type="password"
            placeholder="Senha"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ display: "block", marginBottom: "5px" }}>
            Repita sua senha
          </label>
          <input
            type="password"
            placeholder="Senha"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              height: "70px",
              padding: "10px",
              backgroundColor: "#aaf0d1",
              color: "#000",
              fontSize: "25px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "normal",
              textAlign: "start",
              paddingLeft: "15px"
            }}
          >
            Registrar
          </button>
        </form>
        <a href="/entrar"           
            style={{
              marginTop: "2%",
              padding: "12px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#3b3b3b",
              backgroundColor: "#fff",
            }}>
              Já possui uma conta? Clique aqui para se autenticar
          </a>
      </div>
    </div>
  );
};

export default RegisterForm;
