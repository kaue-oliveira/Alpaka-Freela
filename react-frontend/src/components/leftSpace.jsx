import styles from "../css/home.module.css" // css

import boxEmoji from "../img/package_1f4e6.png"
import manTechEmoji from "../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../img/briefcase_1f4bc.png"
import globeEmoji from "../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../img/hammer-and-wrench_1f6e0-fe0f.png"
import pushpinEmoji from "../img/pushpin_1f4cc.png"
import laptopEmoji from "../img/laptop_1f4bb.png"
import rocketEmoji from "../img/rocket_1f680.png"
import dragonEmoji from "../img/dragon_1f409.png"

export default function LeftSpace() {
    return (
        <div className={styles["left-space"]}>
            <div className={styles.menu}>
                <h1><img src={boxEmoji} alt=""></img> Menu:</h1>
                <a href=""><img src={manTechEmoji} alt=""></img> Find a Freelancer</a>
                <a href=""><img src={briefCaseEmoji} alt=""></img> Advertise projects</a>
                <a href=""><img src={globeEmoji} alt=""></img> Open source space 👈</a>
                <a href=""><img src={hammerEmoji} alt=""></img> Share your project</a>
                <a href=""><img src={pushpinEmoji} alt=""></img> Archive</a>
                <a href=""><img src={laptopEmoji} alt=""></img> Profile</a>
                <h1 className={styles["top-creators-h1"]}><img src={rocketEmoji} alt=""></img> Top Creators page’s:</h1>
                <a href=""><img src={dragonEmoji} alt=""></img> paulohenrique64</a>
            </div>
        </div>
    )
}