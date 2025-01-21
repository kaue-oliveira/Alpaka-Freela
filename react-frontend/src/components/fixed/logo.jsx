import styles from "../../css/login.module.css";
import Images from "./images";

export default function Logo() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>
                        O ponto de encontro entre profissionais Freelancers e
                        grandes oportunidades{" "}
                    </h1>
                    <h5>
                        Comece agora e conecte-se com seu próximo grande
                        desafio!
                    </h5>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "40px"
                        }}
                    >
                        <img
                            src={Images.alpakaAstronaltCloud}
                            alt="Avatar"
                            style={{ borderRadius: "50%" }}
                        />
                    </div>
                </div>
                <div className={styles["div-buttons"]}>
                    <div className={styles["sub-div-buttons-2"]}>
                        <a href="/entrar">Entrar</a>
                        <a href="/registrar">Registrar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
