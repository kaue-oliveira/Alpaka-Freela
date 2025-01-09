import styles from "../../css/login.module.css" 

import Images from "./images"

export default function HeaderNotAuth() {
  return (
    <div className={styles.header}>
      <a href="/home" style={{ display: "flex", flexDirection: "row", textDecoration: "none", alignItems: "center", width: "auto", justifyContent: "space-between", margin: "0" }}>
      <img src={Images.logoImg} alt=""></img>
      <h1 style={{ whiteSpace: "nowrap", textOverflow: "ellipsis" }}>&lt;Alpaka Freela/&gt;</h1>
      </a>
      <div className={styles["header-buttons"]}>
        <a href="/freelancer" className={styles["guest-button"]}>Continuar sem autenticação</a>
        <a href="/entrar" className={styles["signin-button"]}>Entrar</a>
        <a href="/registrar" className={styles["signup-button"]}>Registrar</a>
      </div>

      <script src="../js/home-start.js"></script>
    </div>
  )
}
