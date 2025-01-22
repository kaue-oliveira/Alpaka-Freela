import React, { useState, useContext } from "react";

import HeaderAuth from "../components/fixed/headerAuth";
import Footer from "../components/fixed/footer";
import LeftSpace from "../components/fixed/leftSpace";
import FindFreelancerArea from "../components/areas/findFreelancerArea";
import FindJobArea from "../components/areas/findJobArea";
import PostsManagerArea from "../components/areas/postsManagerArea";
import AccountManagerArea from "../components/areas/accountManagerArea";

import styles from "../css/home.module.css";

import { useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

import Images from "../components/fixed/images";

export default function Dashboard({ defaultElement }) {
    const [currentComponent, setCurrentComponent] = useState(defaultElement);

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

    const menuItems = [
        {
            label: "Encontrar Freelancer",
            icon: Images.manTechEmoji,
            action: "freelancer",
            startSelected: defaultElement === "freelancer",
        },
        {
            label: "Encontrar trabalho",
            icon: Images.briefCaseEmoji,
            action: "trabalho",
            startSelected: defaultElement === "trabalho",
        },
        {
            label: "Gerenciar publicações",
            icon: Images.rocketEmoji,
            action: "gerenciar-publicacoes",
            startSelected: defaultElement === "gerenciar-publicacoes",
        },
        {
            label: "Gerenciar conta",
            icon: Images.hammerEmoji,
            action: "conta",
            startSelected: defaultElement === "conta",
        },
    ];

    return (
        <div>
            <HeaderAuth />
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <div className={styles["background-opacity"]}></div>
                <LeftSpace onButtonClick={handleButtonClick} menuItems={menuItems}/>
                {renderCurrentComponent()}
            </div>
            <div className={styles["horizontal-line"]}></div>
            <Footer />
        </div>
    );
}