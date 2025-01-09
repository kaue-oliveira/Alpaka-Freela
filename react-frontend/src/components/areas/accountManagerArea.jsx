import React, { useState } from "react";

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
import JobCardsForManager from "../fixed/jobCardsForManager"

import EditAccountForm from "../forms/editAccountForm"
import HeaderAreaSwitcher from "../fixed/headerAreaSwitcher"
import FreelancerCardsForManager from "../fixed/freelancersCardsForManager";

export default function AccountManagerArea() {
    const [currentComponent, setCurrentComponent] = useState("manager_account");

    const handleButtonClick = (action) => {
      console.log(`Ação recebida: ${action}`);
      setCurrentComponent(action); // Atualiza o componente atual com base na ação
    };

    const renderCurrentComponent = () => {
        switch (currentComponent) {
          case "manager_account":
            return <EditAccountForm />;
          case "manager_services_offers":
            return <FreelancerCardsForManager/>;
          case "manager_work_offers":
            return <JobCardsForManager/>;
          default:
            return <EditAccountForm />;
        }
    };

    const buttons = [
        { title: "Gerenciar conta", action: "manager_account", startSelected: true },
        { title: "Gerenciar postagens de ofertas de serviço", action: "manager_services_offers", startSelected: false },
        { title: "Gerenciar postagens de ofertas de trabalho", action: "manager_work_offers", startSelected: false },
    ];

    return (
        <div className={styles["middle-space"]}>
            <HeaderAreaSwitcher
                title="Gerenciar conta / posts"
                icon={globeEmoji}
                buttons={buttons}
                onButtonClick={handleButtonClick}
            />
            <div className={styles["edit-account-form-container"]}>
                {renderCurrentComponent()}
            </div>
        </div>
    )
}