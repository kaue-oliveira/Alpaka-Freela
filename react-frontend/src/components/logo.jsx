import styles from "../css/login.module.css" 

export default function Logo() {
    return (
        <div>
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1>Simple Web Space for connect Developers To Projects</h1>
                    <h2>Start Now</h2>
                </div>
                <div className={styles["div-buttons"]}>
                    <div className={styles["sub-div-buttons-1"]}>
                        <a href="/home">Continue without Auth</a>
                    </div>
                    <div className={styles["sub-div-buttons-2"]}>
                        <a href="/home">Sign-in</a>
                        <a href="/home">Sign-up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}