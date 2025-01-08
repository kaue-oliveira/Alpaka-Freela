import styles from "../../css/home.module.css" // css

import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../../img/briefcase_1f4bc.png"
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png"
import laptopEmoji from "../../img/laptop_1f4bb.png"
import rocketEmoji from "../../img/rocket_1f680.png"
import dragonEmoji from "../../img/dragon_1f409.png"

export default function ExtendedLeftSpace() {
    return (
         <div className={styles["extended-left-space"]}>
            <div className={styles.menu}>
                <div className={styles["menu-back-icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="21" height="21" viewBox="0 0 100 100">
                        <path d="M93,52c0-4.9174805-2.9754639-9.1484375-7.2182617-11C90.0245361,39.1484375,93,34.9174805,93,30	c0-6.6171875-5.3828125-12-12-12H23c-6.6171875,0-12,5.3828125-12,12c0,4.9174805,6.0550747,9.1484375,10.2978725,11	C17.0550747,42.8515625,11,47.0825195,11,52s6.0550747,9.1484375,10.2978725,11C17.0550747,64.8515625,11,69.0825195,11,74	c0,6.6171875,5.3828125,12,12,12h58c6.6171875,0,12-5.3828125,12-12c0-4.9174805-2.9754639-9.1484375-7.2182617-11	C90.0245361,61.1484375,93,56.9174805,93,52z" opacity=".35"></path><path fill="#F2F2F2" d="M91,50c0-4.9174805-2.9754639-9.1484375-7.2182617-11C88.0245361,37.1484375,91,32.9174805,91,28	c0-6.6171875-5.3828125-12-12-12H21c-6.6171875,0-12,5.3828125-12,12c0,4.9174805,2.9754639,9.1484375,7.2182617,11	C11.9754639,40.8515625,9,45.0825195,9,50s2.9754639,9.1484375,7.2182617,11C11.9754639,62.8515625,9,67.0825195,9,72	c0,6.6171875,5.3828125,12,12,12h58c6.6171875,0,12-5.3828125,12-12c0-4.9174805-2.9754639-9.1484375-7.2182617-11	C88.0245361,59.1484375,91,54.9174805,91,50z"></path><path fill="#70BFFF" stroke="#40396E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M20.9999943,22.5h58.0000153C82.0375671,22.5,84.5,24.962431,84.5,27.9999943v0.0000114	C84.5,31.037569,82.0375671,33.5,79.0000076,33.5H20.9999943C17.962431,33.5,15.5,31.037569,15.5,28.0000057v-0.0000114	C15.5,24.962431,17.962431,22.5,20.9999943,22.5z"></path><path fill="#70BFFF" stroke="#40396E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M20.9999943,44.5h58.0000153C82.0375671,44.5,84.5,46.9624329,84.5,49.9999962v0.0000076	C84.5,53.0375671,82.0375671,55.5,79.0000076,55.5H20.9999943C17.962431,55.5,15.5,53.0375671,15.5,50.0000038v-0.0000076	C15.5,46.9624329,17.962431,44.5,20.9999943,44.5z"></path><path fill="#70BFFF" stroke="#40396E" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M20.9999943,66.5h58.0000153C82.0375671,66.5,84.5,68.9624329,84.5,71.9999924v0.0000153	C84.5,75.0375671,82.0375671,77.5,79.0000076,77.5H20.9999943C17.962431,77.5,15.5,75.0375671,15.5,72.0000076v-0.0000153	C15.5,68.9624329,17.962431,66.5,20.9999943,66.5z"></path>
                    </svg>
                    <h1>Voltar</h1>
                </div>
                <a href=""><img src={manTechEmoji} alt=""></img> Encontrar Freelancer</a>
                <a href=""><img src={briefCaseEmoji} alt=""></img> Encontrar trabalho</a>
                <a href=""><img src={globeEmoji} alt=""></img> Gerenciar conta / posts</a>
                <a href=""><img src={laptopEmoji} alt=""></img> Caixa de entrada</a>
            </div>
        </div>
    )
}