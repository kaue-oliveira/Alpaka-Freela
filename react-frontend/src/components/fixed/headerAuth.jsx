import { useContext } from "react";
import styles from "../../css/login.module.css";
import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import Images from "./images";

export default function HeaderAuth() {
    const { setAuth, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogoffButton = async () => {
        try {
            const response = await fetch('http://localhost:8080/logoff', {
                method: 'POST',
                credentials: "include", // Permite envio/recebimento de cookies
            });

            // const result = await response.json();

            if (response.ok) {
                setAuth(false);
                setUserData("");
                navigate("/");
            }

            if (!response.ok) {
                alert("Ocorreu um erro ao deslogar. Tente novamente.");
            }

            // onSucess("Dados de registro atualizados com sucesso.");
        } catch (error) {
            alert("Ocorreu um erro ao deslogar. Tente novamente.");
            // onSucess("Dados de registro atualizados com sucesso.");
        }
    }

    return (
        <div className={styles.header}>
            <img src={Images.logoImg} alt=""></img>
            <h1>&lt;Alpaka Freela/&gt;</h1>
            <div className={styles["header-buttons"]}>
                <button className={styles["signup-button"]} onClick={handleLogoffButton}>
                    Sair
                </button>
            </div>

            <script src="../js/home-start.js"></script>
        </div>
    );
}
