import styles from "../../css/login.module.css" 

import logoImg from "../../img/alpaca-rock-cyberpunk.png"

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt=""></img>
      <h1>&lt;Alpaka Freela/&gt;</h1>
      <div className={styles["header-buttons"]}>
        <a href="/home" className={styles["guest-button"]}>Continuar sem autenticação</a>
        <a href="/home" className={styles["signin-button"]}>Entrar</a>
        <a href="/home" className={styles["signup-button"]}>Sair</a>
      </div>

      <script src="../js/home-start.js"></script>
    </div>
  )
}
