import styles from "../../css/home.module.css" 

import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import boxEmoji from "../../img/package_1f4e6.png"
import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../../img/briefcase_1f4bc.png"
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png"
import pushpinEmoji from "../../img/pushpin_1f4cc.png"
import laptopEmoji from "../../img/laptop_1f4bb.png"
import rocketEmoji from "../../img/rocket_1f680.png"
import dragonEmoji from "../../img/dragon_1f409.png"

export default function AccountManagerArea() {
    return (
        <div className={styles["middle-space"]}>
            <h1><img src={pushpinEmoji} alt=""></img> Gerenciar conta</h1>
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