import styles from "../css/login.module.css" 

export default function Logo() {
    return (
        <div>
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <div className={styles.logo}>
                <h1>O ponto de encontro entre desenvolvedores freelancers e grandes oportunidades</h1>
                <h5>Comece agora e conecte-se com seu próximo grande desafio!</h5>
                </div>
                <div className={styles["div-buttons"]}>
                    <div className={styles["sub-div-buttons-1"]}>
                        <a href="/home">Continuar sem autenticação</a>
                    </div>
                    <div className={styles["sub-div-buttons-2"]}>
                        <a href="/home">Entrar</a>
                        <a href="/home">Registrar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}