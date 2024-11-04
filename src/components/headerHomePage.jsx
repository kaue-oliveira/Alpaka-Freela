import styles from "../css/home.module.css" 

import logoImg from "../img/alpaca-rock-cyberpunk.png"
import ThemeSwitcher from "./themeSwitcher"

export default function HeaderHomePage() {
  return (
    <div className={styles.header}>
        <img src={logoImg} alt=""></img>
        <h1>&lt;Alpaka Space/&gt;</h1>
        <div className={styles["header-buttons"]}>
            <ThemeSwitcher></ThemeSwitcher>
            <a href="">Sign-in</a>
            <a href="">Sign-up</a>
            <a href="/" className={styles["logout-button"]}>Logout</a>
        </div>
        <script src="../js/home.js"/>
    </div>
  )
}
