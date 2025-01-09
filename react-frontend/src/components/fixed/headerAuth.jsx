import styles from "../../css/login.module.css" 

import Images from "./images"

export default function HeaderAuth() {
  return (
    <div className={styles.header}>
      <img src={Images.logoImg} alt=""></img>
      <h1>&lt;Alpaka Freela/&gt;</h1>
      <div className={styles["header-buttons"]}>
        <a href="/home" className={styles["signup-button"]}>Sair</a>
      </div>

      <script src="../js/home-start.js"></script>
    </div>
  )
}
