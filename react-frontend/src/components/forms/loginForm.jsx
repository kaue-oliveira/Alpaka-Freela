import React from "react";

import Images from "../fixed/images";

const LoginForm = () => {
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
          Entrar na plataforma
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
            Entrar
          </button>
        </form>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
          <a href="/registrar"           
            style={{
              marginTop: "2%",
              padding: "12px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#3b3b3b",
              backgroundColor: "#fff",
            }}>
              Não possui uma conta? Clique aqui para se registrar
          </a>
          <a href="/recuperar-senha-gerar-link"           
            style={{
              marginTop: "2%",
              padding: "12px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "#ff3f3f",
              backgroundColor: "#fff",
            }}>
              Esqueceu sua senha? Clique aqui
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
