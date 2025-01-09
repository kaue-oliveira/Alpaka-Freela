import React, { useState } from "react";

import HeaderAuth from "../components/fixed/headerAuth";
import Footer from "../components/fixed/footer";
import LeftSpace from "../components/fixed/leftSpace";
import ExtendedLeftSpace from "../components/fixed/extendedLeftSpace";
import ReducedLeftSpace from "../components/fixed/reducedLeftSpace";
import FindFreelancerArea from "../components/areas/findFreelancerArea";
import FindJobArea from "../components/areas/findJobArea";
import PostsManagerArea from "../components/areas/postsManagerArea";
import AccountManagerArea from "../components/areas/accountManagerArea";

import styles from "../css/home.module.css";

import { useEffect } from "react";

export default function Dashboard() {
    const [currentComponent, setCurrentComponent] = useState("freelancer");

    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case "freelancer":
                return <FindFreelancerArea />;
            case "trabalho":
                return <FindJobArea />;
            case "conta":
                return <AccountManagerArea />;
            case "gerenciar-publicacoes":
                return <PostsManagerArea />;
            default:
                return <FindFreelancerArea />;
        }
    };

    const handleButtonClick = (action) => {
        setCurrentComponent(action); // Atualiza o componente atual com base na ação
    };

    return (
        <div>
            <HeaderAuth />
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <ReducedLeftSpace></ReducedLeftSpace>
                <ExtendedLeftSpace></ExtendedLeftSpace>
                <div className={styles["background-opacity"]}></div>
                <LeftSpace onButtonClick={handleButtonClick} />
                {renderCurrentComponent()}
            </div>
            <div className={styles["horizontal-line"]}></div>
            <Footer />
        </div>
    );
}
