import React, { useState, useContext } from "react";

import HeaderAuth from "../components/fixed/headerAuth";
import Footer from "../components/fixed/footer";
import LeftSpace from "../components/fixed/leftSpace";
import Images from "../components/fixed/images";
import styles from "../css/home.module.css";

import { useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

import ManagerFreelancersAdmin from "../components/admin/managerFreelancersAdmin";
import ManagerJobsAdmin from "../components/admin/managerJobsAdmin";
import ManagerUsersAdmin from "../components/admin/managerUsersAdmin";

export default function AdminDashboard() {
    const [currentComponent, setCurrentComponent] = useState("freelancer");

    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case "gerenciar-usuarios":
                return <ManagerUsersAdmin/>;
            case "gerenciar-ofertas-de-servico":
                return <ManagerFreelancersAdmin/>;
            case "gerenciar-ofertas-de-trabalho":
                return <ManagerJobsAdmin/>;
            default:
                return <ManagerUsersAdmin/>;
        }
    };

    const handleButtonClick = (action) => {
        setCurrentComponent(action); // Atualiza o componente atual com base na ação
    };

    const menuItems = [
        {
            label: "Gerenciar usuários cadastrados",
            icon: Images.manTechEmoji,
            action: "gerenciar-usuarios",
            startSelected: true,
        },
        {
            label: "Gerenciar ofertas de serviço",
            icon: Images.briefCaseEmoji,
            action: "gerenciar-ofertas-de-servico",
        },
        {
            label: "Gerenciar ofertas de trabalho",
            icon: Images.rocketEmoji,
            action: "gerenciar-ofertas-de-trabalho",
        },
    ];

    return (
        <div>
            <HeaderAuth />
            <div className={styles["horizontal-line"]}></div>
            <div className={styles.container}>
                <div className={styles["background-opacity"]}></div>
                <LeftSpace onButtonClick={handleButtonClick} menuItems={menuItems} />
                {renderCurrentComponent()}
            </div>
            <div className={styles["horizontal-line"]}></div>
            <Footer />
        </div>
    );
}



