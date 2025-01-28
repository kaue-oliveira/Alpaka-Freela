import styles from "../../css/login.module.css";
import Images from "./images";
import { motion } from "framer-motion";

export default function Logo() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}>
                            <h1>
                                O ponto de encontro entre profissionais Freelancers e
                                grandes oportunidades{" "}
                            </h1>
                        </motion.div>
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
        </motion.div>

    );
}
