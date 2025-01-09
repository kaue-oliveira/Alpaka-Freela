import React, { useState } from "react";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import Images from "../fixed/images";

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
                width: "100%",
                borderRadius: "8px",
                height: "86vh",
                fontFamily: "Arial, sans-serif",
                margin: 0,
                border: "1px solid #000000",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Alinha o conteúdo e os botões
                boxSizing: "border-box",
                backgroundColor: "#fff",
            }}
        >
            <div>
                <h2
                    style={{
                        textAlign: "start",
                        margin: "0",
                        marginBottom: "1%",
                        fontWeight: 600,
                    }}
                >
                    Editar informações da conta
                </h2>
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={Images.profileImage}
                        alt="Foto do perfil"
                        style={{
                            width: "10%",
                            height: "auto",
                            borderRadius: "50%",
                            marginBottom: "10px",
                        }}
                    />
                    <button
                        style={{
                            padding: "10px",
                            cursor: "pointer",
                            width: "20%",
                            textAlign: "center",
                        }}
                    >
                        Carregar nova imagem
                    </button>
                </div>
                <form>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "flex-start",
                            gap: "1%",
                        }}
                    >
                        <div style={{ marginBottom: "15px", flex: "1" }}>
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
                                placeholder="Username"
                                style={{
                                    fontSize: "15px",
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #000000",
                                    borderRadius: "4px",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: "15px", flex: "1" }}>
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
                            placeholder="Name"
                            style={{
                                fontSize: "15px",
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #000000",
                                borderRadius: "4px",
                                boxSizing: "border-box",
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
                            type="text"
                            placeholder="Email"
                            style={{
                                fontSize: "15px",
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #000000",
                                borderRadius: "4px",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "flex-start",
                            gap: "1%",
                        }}
                    >
                        <div style={{ marginBottom: "15px", flex: "1" }}>
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
                                placeholder="Senha"
                                style={{
                                    fontSize: "15px",
                                    width: "100%",
                                    padding: "10px",
                                    border: "1px solid #000000",
                                    borderRadius: "4px",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: "15px", flex: "1" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: "bold",
                                marginBottom: "5px",
                            }}
                        >
                            Confirmar senha
                        </label>
                        <input
                            type="password"
                            placeholder="Confirmar senha"
                            style={{
                                fontSize: "15px",
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #000000",
                                borderRadius: "4px",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>
                </form>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1%",
                }}
            >
                <button
                    type="submit"
                    style={{
                        width: "68%",
                        padding: "10px",
                        border: "1px solid #000000",
                        borderRadius: "4px",
                        fontSize: "16px",
                        backgroundColor: "#beffc2",
                        color: "black",
                        cursor: "pointer",
                    }}
                >
                    Salvar Alterações
                </button>
                <button
                    type="button"
                    style={{
                        width: "30%",
                        padding: "10px",
                        border: "1px solid #000000",
                        borderRadius: "4px",
                        fontSize: "16px",
                        backgroundColor: "#ffb2b9",
                        color: "black",
                        cursor: "pointer",
                    }}
                    onClick={handleDeleteAccountClick}
                >
                    Excluir conta
                </button>
            </div>
            {showPopup && (
                <DeleteConfirmationPopup onClose={handleClosePopup} />
            )}
        </div>
    );
};

export default EditAccountForm;
