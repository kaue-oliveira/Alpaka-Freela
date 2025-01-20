import styles from "../../css/login.module.css";
import { useNavigate } from "react-router-dom";

import Images from "./images";

export default function HeaderNotAuth() {
    const navigate = useNavigate();

    const handleEntrarClick = () => {
        navigate("/entrar"); 
    };

    const handleRegistrarClick = () => {
        navigate("/registrar"); 
    };

    return (
        <div className={styles.header}>
            <a
                href="/home"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    alignItems: "center",
                    width: "auto",
                    justifyContent: "space-between",
                    margin: "0",
                }}
            >
                <img src={Images.logoImg} alt=""></img>
                <h1 style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                    &lt;Alpaka Freela/&gt;
                </h1>
            </a>
            <div className={styles["header-buttons"]}>
                <button className={styles["signin-button"]} onClick={handleEntrarClick}>
                    Entrar
                </button>
                <button className={styles["signup-button"]} onClick={handleRegistrarClick}>
                    Registrar
                </button>
            </div>

            <script src="../js/home-start.js"></script>
        </div>
    );
}
