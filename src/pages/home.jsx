
import HeaderHomePage from "../components/headerHomePage"
import Footer from "../components/footer"
import LeftSpace from "../components/leftSpace"
import MiddleSpace from "../components/middleSpace"
import ExtendedLeftSpace from "../components/extendedLeftSpace"
import ReducedLeftSpace from "../components/reducedLeftSpace"

import styles from "../css/home.module.css"

import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
        const reducedLeftSpaceIcons = document.querySelectorAll(`.${styles["reduced-left-space"]} h1, .${styles["reduced-left-space"]} svg, .${styles["reduced-left-space"]} img`)

        for (let i = 0; i < reducedLeftSpaceIcons.length; i++) {
            reducedLeftSpaceIcons[i].addEventListener("click", function(event) {
                console.log("clique");
                
                document.querySelector("." + styles["reduced-left-space"]).style.display = "none"
                document.querySelector("." + styles["extended-left-space"]).style.display = "flex"
                document.querySelector("." + styles["middle-space"]).style.width = "100%"
                document.querySelector("." + styles["background-opacity"]).style.display = "flex"
                document.querySelector("body").style.overflow = "hidden"
            })
        }

        const extendedLeftSpace = document.querySelector("." + styles["extended-left-space"])
 
        extendedLeftSpace.addEventListener("click", function(event) {
            document.querySelector("." + styles["reduced-left-space"]).style.display = "flex"
            document.querySelector("." + styles["extended-left-space"]).style.display = "none"
            document.querySelector("." + styles["middle-space"]).style.width = "80%"
            document.querySelector("." + styles["background-opacity"]).style.display = "none"
            document.querySelector("body").style.overflow = "auto"
        })

        function reportWindowSize() {         
            document.querySelector("." + styles["background-opacity"]).style.display = "none"

            if (window.innerWidth > 550) {
                document.querySelector("." + styles["reduced-left-space"]).style.display = "none"
                document.querySelector("." + styles["extended-left-space"]).style.display = "none"
            } 

            if (window.innerWidth < 550) {
                document.querySelector("." + styles["extended-left-space"]).style.display = "none"
                document.querySelector("." + styles["reduced-left-space"]).style.display = "flex"
            } 

        }

        window.addEventListener("resize", reportWindowSize);
    })

    return (
        <div>
            <HeaderHomePage/>
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <ReducedLeftSpace></ReducedLeftSpace>
                <ExtendedLeftSpace></ExtendedLeftSpace>
                <div className={styles["background-opacity"]}></div>
                <LeftSpace></LeftSpace>
                <MiddleSpace></MiddleSpace>
            </div>
            <div className={styles["horizontal-line"]}></div>
            <Footer/>
        </div>
    )
}