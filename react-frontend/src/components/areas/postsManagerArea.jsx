import React, { useState } from "react";

import styles from "../../css/home.module.css";

import Images from "../fixed/images";

import EditAccountForm from "../forms/editAccountForm";
import HeaderAreaSwitcher from "../fixed/headerAreaSwitcher";

import ProposalsComponent from "../cards/proposalsReceivedComponent";
import ProposalsSendedComponent from "../cards/proposalsSendedComponent";

import FreelancerCardsForManager from "../fixed/freelancersCardsForManager";
import JobCardsForManager from "../fixed/jobCardsForManager";

export default function PostsManagerArea() {
    const [currentComponent, setCurrentComponent] = useState("manager_account");

    const handleButtonClick = (action) => {
        console.log(`Ação recebida: ${action}`);
        setCurrentComponent(action); // Atualiza o componente atual com base na ação
    };

    const renderCurrentComponent = () => {
        switch (currentComponent) {
            case "service_offer_posts":
                return <FreelancerCardsForManager />;
            case "job_offer_posts":
                return <JobCardsForManager />;
            default:
                return <FreelancerCardsForManager />;
        }
    };

    const buttons = [
        {
            title: "Gerenciar postagens de ofertas de serviço",
            action: "service_offer_posts",
            startSelected: true,
        },
        {
            title: "Gerenciar postagens de ofertas de trabalho",
            action: "job_offer_posts",
            startSelected: false,
        },
    ];

    return (
        <div className={styles["middle-space"]}>
            <HeaderAreaSwitcher
                title="Gerenciar publicações"
                icon={Images.rocketEmoji}
                buttons={buttons}
                onButtonClick={handleButtonClick}
            />
            <div className={styles["edit-account-form-container"]}>
                {renderCurrentComponent()}
            </div>
        </div>
    );
}
