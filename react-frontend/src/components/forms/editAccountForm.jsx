import React, { useState, useContext } from "react";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import Images from "../fixed/images";
import { AuthContext } from "../../contexts/authContext";
import MessageCard from "../cards/messageCard";

const EditAccountForm = ({ onSucess }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [overlayType, setOverlayType] = useState("");
    const { auth, setAuth, userData, setUserData } = useContext(AuthContext);

    const [accountDeleted, setAccountDeleted] = useState(false);
    const [incorrectImage, setIncorrectImage] = useState("");
    const [incorrectUsername, setIncorrectUsername] = useState("");
    const [incorrectName, setIncorrectName] = useState("");
    const [incorrectEmail, setIncorrectEmail] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState("");
    const [passwordNotEquals, setPasswordNotEquals] = useState("");
    const [exposeImage, setExposeImage] = useState("data:image/jpeg;base64," + userData.profileImage);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");

    const toggleOverlay = (type) => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType(type || ""); // Define o tipo do overlay, ou limpa se estiver fechando
    };

    const handleFormSubmit = (message) => {
        toggleOverlay("form_submited");
        setSucessPopupMessage(message);
    };

    const handleDeleteAccountClick = () => {
        toggleOverlay("delete_account");
    };

    const handleSubmitEditAccountForm = async (event) => {
        event.preventDefault();
        let readyForSubmitForm = true;


        const formData = {
            username: event.target.username.value.trim(),
            nome: event.target.nome.value.trim(),
            email: event.target.email.value.trim(),
            password1: event.target.password1.value,
            password2: event.target.password2.value,
            profileImage: event.target.image.files[0],
        }

        if (formData.username.length < 3 || formData.username.length > 40) {
            setIncorrectUsername("Seu username deve possuir entre 3 e 40 caracteres.");
            readyForSubmitForm = false;
        }

        if (formData.nome.length < 3 || formData.nome.length > 50) {
            setIncorrectName("Seu nome deve possuir entre 3 e 50 caracteres.");
            readyForSubmitForm = false;
        }

        if (formData.email.length === 0) {
            setIncorrectEmail("Digite um email válido.");
            readyForSubmitForm = false;
        }

        if (formData.password1 && (formData.password1.length < 8 || formData.password1.length > 20)) {
            setIncorrectPassword("Sua senha deve possuir entre 8 e 20 caracteres.");
            readyForSubmitForm = false;
        }

        if (formData.password1 && !formData.password2) {
            setPasswordNotEquals("Você precisa preencher os dois campos de senha");
            readyForSubmitForm = false;
        }

        if (formData.password1 && formData.password1 !== formData.password2) {
            setPasswordNotEquals("As senhas não coincidem.");
            readyForSubmitForm = false;
        }

        if (formData.profileImage && formData.profileImage.size / 1000000 > 15) {
            setIncorrectImage("O tamanho da imagem não deve exceder 15mb");
            readyForSubmitForm = false;
        }

        if (readyForSubmitForm) {

            const data = {
                username: formData.username,
                nome: formData.nome,
                email: formData.email,
                password: formData.password1
            }

            const formDataToSend = new FormData();

            formDataToSend.append('image', formData.profileImage); // "file" é o nome do parâmetro esperado no backend
            formDataToSend.append('dados', JSON.stringify(data)); // Envia os dados como JSON em string

            console.log(formDataToSend.get("dados"));


            try {
                const response = await fetch('http://localhost:8080/usuario', {
                    method: 'PUT',
                    credentials: "include", // Permite envio/recebimento de cookies
                    body: formDataToSend,
                });

                const result = await response.json();

                if (response.ok) {
                    setUserData(result);
                    setExposeImage(null);
                    console.log(result);

                    handleFormSubmit("Seus dados foram atualizados com sucesso.");
                }

                if (!response.ok) {
                    console.log(response.body.values[0]);

                    handleFormSubmit("Ocorreu um erro ao tentar atualizar seus dados de registro. Por favor tente novamente.");
                }

                // onSucess("Dados de registro atualizados com sucesso.");
            } catch (error) {
                console.log(error.message);
                // onSucess("Dados de registro atualizados com sucesso.");
            }
        }
    }

    const handleChangeForm = () => {
        setIncorrectUsername("");
        setIncorrectName("");
        setIncorrectPassword("");
        setIncorrectEmail("");
        setPasswordNotEquals("");
    }

    const handleDeleteAccountConfirmation = async () => {
        try {
            const response = await fetch('http://localhost:8080/usuario/excluir-conta', {
                method: 'DELETE',
                credentials: "include", // Permite envio/recebimento de cookies
            });

            const result = await response.json();

            console.log(result);

            toggleOverlay("account_deleted");
            setSucessPopupMessage(result)

            if (response.ok) {
                setAccountDeleted(true);
            }
        } catch (error) {
            console.log(error.message);
            handleFormSubmit(result);
        }
    }

    const deleteData = () => {
        setUserData(null);
        setAuth(false);
    }


    const handleImageInput = (event) => {
        let image = event.target.files[0];

        setIncorrectImage("");

        if (image) {
            const reader = new FileReader();

            reader.onload = function (e) {
                setExposeImage(e.target.result);
            };

            reader.readAsDataURL(image);

            if (image.size / 1000000 > 15) {
                setIncorrectImage("O tamanho da imagem não deve exceder 15mb");
                readyForSubmitForm = false;
            }
        }
    }




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
            <form onSubmit={handleSubmitEditAccountForm} onChange={handleChangeForm}>



                {/* IMAGEM */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "5px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <img
                        src={exposeImage ? exposeImage : "data:image/jpeg;base64," + userData.profileImage}
                        alt="Foto do perfil"
                        style={{
                            width: "110px",
                            height: "110px",
                            borderRadius: "50%",
                            marginBottom: "10px",
                        }}
                    />
                    <label
                        style={{
                            display: "block",
                            padding: "10px",
                            cursor: "pointer",
                            width: "auto",
                            textAlign: "center",
                            backgroundColor: "#f0f0f0",
                            border: "1px solid #000000",
                            borderRadius: "4px",
                            boxSizing: "border-box",
                            fontSize: "14px",
                            color: "#333",
                            fontWeight: "bold",
                            transition: "all 0.3s",
                        }}
                        htmlFor="fileInput"
                    >
                        Selecionar imagem
                    </label>
                    <input
                        name="image"
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        style={{
                            display: "none",
                        }}
                        onChange={handleImageInput}
                    />
                </div>
                <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                    {incorrectImage}
                </div>



                {/* USERNAME */}
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        gap: "1%",
                    }}
                >
                    <div style={{ marginBottom: "5px", flex: "1" }}>
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
                            name="username"
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
                            defaultValue={userData.username}
                        />
                    </div>
                </div>
                <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                    {incorrectUsername}
                </div>



                {/* NOME */}
                <div style={{ marginBottom: "5px", flex: "1" }}>
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
                        name="nome"
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
                        defaultValue={userData.name}
                    />
                </div>
                <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                    {incorrectName}
                </div>


                {/* EMAIL */}
                <div style={{ marginBottom: "5px" }}>
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
                        name="email"
                        type="email"
                        placeholder="Email"
                        style={{
                            fontSize: "15px",
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #000000",
                            borderRadius: "4px",
                            boxSizing: "border-box",
                        }}
                        defaultValue={userData.email}
                    />
                </div>
                <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                    {incorrectEmail}
                </div>



                {/* SENHA */}
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        gap: "1%",
                    }}
                >
                    <div style={{ marginBottom: "5px", flex: "1" }}>
                        <label
                            style={{
                                display: "block",
                                fontWeight: "bold",
                                marginBottom: "5px",
                            }}
                        >
                            Se desejar crie uma nova senha preenchendo os campos abaixo
                        </label>
                        <input
                            name="password1"
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
                <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                    {incorrectPassword}
                </div>



                {/* CONFIRMAR SENHA */}
                <div style={{ marginBottom: "5px", flex: "1" }}>
                    <label
                        style={{
                            display: "block",
                            fontWeight: "bold",
                            marginBottom: "5px",
                        }}
                    >
                        Confirmar sua nova senha
                    </label>
                    <input
                        name="password2"
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
                <div style={{ color: "red", fontSize: "13px", marginTop: "0px", marginBottom: "5px", height: "15px" }}>
                    {passwordNotEquals}
                </div>



                {/* SALVAR ALTERACOES / EXCLUIR CONTA */}
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
                            width: "auto",
                            padding: "10px",
                            border: "1px solid #000000",
                            borderRadius: "4px",
                            fontSize: "15px",
                            backgroundColor: "#beffc2",
                            color: "black",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                    >
                        Salvar Alterações
                    </button>

                    <button
                        type="button"
                        style={{
                            width: "auto",
                            padding: "10px",
                            border: "1px solid #000000",
                            borderRadius: "4px",
                            fontSize: "15px",
                            backgroundColor: "#ffb2b9",
                            color: "black",
                            cursor: "pointer",
                            fontWeight: "600"
                        }}
                        onClick={handleDeleteAccountClick}
                    >
                        Excluir conta
                    </button>
                </div>



            </form>


            {isOverlayOpen && overlayType === "delete_account" && (
                <DeleteConfirmationPopup onClose={toggleOverlay} onConfirm={handleDeleteAccountConfirmation} />
            )}
            {isOverlayOpen && overlayType === "form_submited" && (
                <MessageCard onClose={toggleOverlay} message={sucessPopupMessage} />
            )}
            {overlayType === "account_deleted" && (
                <MessageCard onClose={accountDeleted ? deleteData : toggleOverlay} message={sucessPopupMessage} />
            )}
        </div>
    );
};

export default EditAccountForm;
