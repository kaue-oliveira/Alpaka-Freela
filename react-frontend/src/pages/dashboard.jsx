
import React, { useState } from "react";

import HeaderHomePage from "../components/fixed/headerHomePage"
import Footer from "../components/fixed/footer"
import LeftSpace from "../components/fixed/leftSpace"
import ExtendedLeftSpace from "../components/fixed/extendedLeftSpace"
import ReducedLeftSpace from "../components/fixed/reducedLeftSpace"

import { useLocation } from "react-router-dom";


import FindFreelancerArea from "../components/areas/findFreelancerArea"
import FindWorkArea from "../components/areas/findWorkArea"
import InboxArea from "../components/areas/inboxArea"
import AccountManagerArea from "../components/areas/accountManagerArea"

import styles from "../css/home.module.css"

import { useEffect } from "react"

export default function Dashboard() {
    const [currentComponent, setCurrentComponent] = useState("freelancer");

    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case "freelancer":
                return <FindFreelancerArea />;
            case "trabalho":
                return <FindWorkArea/>;
            case "conta":
                return <AccountManagerArea/>;
            case "inbox":
                return <InboxArea/>;
            default:
                return <FindFreelancerArea />;
        }
    };

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

    const handleButtonClick = (action) => {
        setCurrentComponent(action); // Atualiza o componente atual com base na ação
    };

    return (
        <div>
            <HeaderHomePage/>
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <ReducedLeftSpace></ReducedLeftSpace>
                <ExtendedLeftSpace></ExtendedLeftSpace>
                <div className={styles["background-opacity"]}></div>
                <LeftSpace
                    onButtonClick={handleButtonClick}
                />
                {renderCurrentComponent()}
            </div>
            <div className={styles["horizontal-line"]}></div>
            <Footer/>
        </div>
    )
}