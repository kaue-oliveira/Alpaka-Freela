import styles from "../../css/home.module.css" // css

import boxEmoji from "../../img/package_1f4e6.png"
import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../../img/briefcase_1f4bc.png"
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png"
import pushpinEmoji from "../../img/pushpin_1f4cc.png"
import laptopEmoji from "../../img/laptop_1f4bb.png"
import rocketEmoji from "../../img/rocket_1f680.png"
import dragonEmoji from "../../img/dragon_1f409.png"

export default function LeftSpace() {
    return (
        <div className={styles["left-space"]}>
            <div className={styles.menu}>
                <a href="/freelancer"><img src={manTechEmoji} alt=""></img> Encontrar Freelancer</a>
                <a href="/trabalho"><img src={briefCaseEmoji} alt=""></img> Encontrar trabalho</a>
                <a href="/conta"><img src={globeEmoji} alt=""></img> Gerenciar conta / posts</a>
                <a href="/caixa-de-entrada"><img src={laptopEmoji} alt=""></img> Caixa de entrada</a>
            </div>
        </div>
    )
}