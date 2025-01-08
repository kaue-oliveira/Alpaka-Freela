import styles from "../../css/home.module.css" 

import logoImg from "../../img/alpaca-rock-cyberpunk.png"

export default function HeaderHomePage() {
  return (
    <div className={styles.header}>
        <img src={logoImg} alt=""></img>
        <h1>&lt;Alpaka Freela/&gt;</h1>
        <div className={styles["header-buttons"]}>
            <a href="">Entrar</a>
            <a href="">Registrar</a>
            <a href="/" className={styles["logout-button"]}>Sair</a>
        </div>
        <script src="../js/home.js"/>
    </div>
  )
}
