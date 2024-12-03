import styles from "../css/home.module.css" 

import globeEmoji from "../img/globe-showing-europe-africa_1f30d.png"

export default function MiddleSpace() {
    return (
        <div className={styles["middle-space"]}>
            <h1><img src={globeEmoji} alt=""></img> Projetos da Comunidade</h1>
            <div className={styles.posts}>
                {/* post 1 */}
            </div>
            <div className={styles.posts}>
                {/* post 2 */}
            </div>
            <div className={styles.posts}>
                {/* post 3 */}
            </div>
            <div className={styles.posts}>
                {/* post 4 */}
            </div>
            <div className={styles.posts}>
                {/* post 5 */}
            </div>
            <div className={styles.posts}>
                {/* post 6 */}
            </div>
        </div>
    )
}