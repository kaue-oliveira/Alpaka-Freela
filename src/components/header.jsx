import styles from "../css/login.module.css" 

import logoImg from "../img/alpaca-rock-cyberpunk.png"
import ThemeSwitcher from "./themeSwitcher"

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt=""></img>
      <h1>&lt;Alpaka Space/&gt;</h1>
      <div className={styles["header-buttons"]}>
        <ThemeSwitcher></ThemeSwitcher>
        <a href="/home" className={styles["guest-button"]}>Continue without Auth</a>
        <a href="/home" className={styles["signin-button"]}>Sign-in</a>
        <a href="/home" className={styles["signup-button"]}>Sign-up</a>
      </div>

      <script src="../js/home-start.js"></script>
    </div>
  )
}
