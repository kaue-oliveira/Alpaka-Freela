import React, { useState, useEffect } from "react";
import Images from "../fixed/images";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScrollContainerPurple = styled.div`
  overflow-y: auto;
  height: 100%; 
  
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

const JobForm = ({ onClose, onSucess, newJobPost }) => {
    const [excedLengthErrorMessage, setExcedErrorMessage] = useState("");
    const [textAreaLettersQuantity, setTextAreaLettersQuantity] = useState(0);
    const [incorrectTitleErrorMessage, setIncorrectTitleErrorMessage] = useState("");
    const [incorrectPaymentErrorMessage, setIncorrectPaymentErrorMessage] = useState("");
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const backendDomain = process.env.BACKEND_DOMAIN;

    const submitFormHandle = async (event) => {
        event.preventDefault();

        let formData = {
            title: event.target.title.value,
            description: event.target.description.value,
            payment: event.target.payment.value,
        };

        let error = false;

        // verificar pagamento
        if (!formData.payment || formData.payment < 0) {
            setIncorrectPaymentErrorMessage("Você precisa digitar um número positivo.");
            error = true;
        }


        // verificar titulo
        if (!formData.title || (formData.title.length < 5 || formData.title.length > 100)) {
            setIncorrectTitleErrorMessage("O título deve possuir entre 5 e 100 caracteres.");
            error = true;
        }

        // verificar descricao
        if (!formData.description || (formData.description.length < 100 || formData.description.length > 7000)) {
            setExcedErrorMessage("Sua descrição deve ter no mínimo 100 e no máximo 7000 caracteres.");
            error = true;
        }

        // tudo certo, formulario pode ser enviado para o backend
        if (!error) {
            const data = {
                titulo: formData.title,
                descricao: formData.description,
                pagamento: formData.payment,
            }

            try {
                const response = await fetch(backendDomain + '/ofertas-trabalho', {
                    method: 'POST',
                    credentials: "include", // Permite envio/recebimento de cookies
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                    onSucess("Oferta de trabalho cadastrada com sucesso.");
                    newJobPost(result);
                } else {
                    console.log(result);
                    onSubmit(result);
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
    }

    const handleInputTitle = (event) => {
        const title = event.target.value;

        setIncorrectTitleErrorMessage("");

        if (title.length < 5 || title.length > 100) {
            setIncorrectTitleErrorMessage("O título deve possuir entre 5 e 100 caracteres.");
        }
    };

    const handleDescription = (event) => {
        const description = event.target.value.trim();
        setExcedErrorMessage("");
        setTextAreaLettersQuantity(description.length);
    }

    const handleInputPayment = (event) => {
        const payment = event.target.value;

        setIncorrectPaymentErrorMessage("");

        if (payment < 0) {
            setIncorrectPaymentErrorMessage("Você precisa digitar um número positivo.");
        }
    };

    const styles = {
        container: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        },
        form: {
            fontFamily: "Arial, sans-serif",
            width: "100vh",
            height: "80vh",
            marginTop: "6vh",
            padding: "20px",
            border: "1px solid #000",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "end",
            flexDirection: "column"
        },
        header: {
            fontSize: "2rem",
            marginBottom: "25px",
            marginTop: "0",
            textAlign: "start",
        },
        label: {
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
        },
        input: {
            width: "98%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #000",
            boxSizing: "border-box",
        },
        textarea: {
            minWidth: "98%",
            width: "98%",
            minHeight: "60%",
            maxWidth: "98%",
            maxHeight: "60%",
            height: "60%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #000",
            boxSizing: "border-box",
            resize: "none"
        },
        button: {
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "1px solid #000",
        },
        submitButton: {
            backgroundColor: "#beffc2",
            color: "#000000",
            marginRight: "10px",
        },
        cancelButton: {
            backgroundColor: "#ffb2b9",
            color: "#000000",
        },

    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div style={styles.container}>
                <div style={styles.form}>
                    <h1 style={styles.header}>Cadastrando oferta de trabalho</h1>
                    <form style={{ boxSizing: "border-box", height: "90%" }} onSubmit={submitFormHandle}>
                        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <ScrollContainerPurple>
                                <div style={{ overflow: "auto", height: "97%" }}>

                                    {/* TITULO */}
                                    <label style={styles.label} htmlFor="title">
                                        Titulo
                                    </label>
                                    <input
                                        name="title"
                                        id="title"
                                        type="text"
                                        placeholder="Titulo"
                                        style={styles.input}
                                        onChange={handleInputTitle}
                                    />
                                    <div style={{ color: "red", fontSize: "14px", marginTop: "5px", marginBottom: "5px", height: "18px", }}>
                                        {incorrectTitleErrorMessage}
                                    </div>

                                    {/* DESCRICAO */}
                                    <label style={styles.label} htmlFor="description">
                                        Descrição
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        placeholder="Descrição"
                                        style={styles.textarea}
                                        onChange={handleDescription}
                                    />
                                    <p style={{ margin: "0" }}>{textAreaLettersQuantity} / 7000</p>
                                    <div style={{ color: "red", fontSize: "14px", marginTop: "5px", marginBottom: "5px", height: "18px", }}>
                                        {excedLengthErrorMessage}
                                    </div>

                                    {/* VALOR PAGO PELO TRABALHO */}
                                    <label style={styles.label} htmlFor="title">
                                        Valor pago pelo trabalho
                                    </label>
                                    <input
                                        name="payment"
                                        id="payment"
                                        type="number"
                                        step="0.01"
                                        placeholder="Valor pago pelo trabalho"
                                        style={styles.input}
                                        min="0"
                                        onChange={handleInputPayment}
                                    />
                                    <div style={{ color: "red", fontSize: "14px", marginTop: "5px", marginBottom: "5px", height: "18px", }}>
                                        {incorrectPaymentErrorMessage}
                                    </div>
                                </div>
                            </ScrollContainerPurple>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <button
                                    type="submit"
                                    style={{ ...styles.button, ...styles.submitButton }}
                                >
                                    Cadastrar oferta de trabalho
                                </button>
                                <button
                                    type="button"
                                    style={{ ...styles.button, ...styles.cancelButton }}
                                    onClick={onClose}
                                >
                                    Cancelar
                                </button>
                                <div style={{ color: "red", fontSize: "15px", marginLeft: "10px", height: "18px", }}>
                                    {formErrorMessage}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default JobForm;
