import React, { useState, useEffect } from "react";
import styles from "../../css/home.module.css";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditServiceForm from "../forms/editServiceForm";
import UserCardForManager from "./userCardForManager";
import Images from "../fixed/images";
import MessageCard from "../cards/messageCard";
import ReceivedProposalsComponent from "../cards/receivedProposalsComponent";
import { motion } from 'framer-motion';
import HeaderAreaSwitcher from "../fixed/headerAreaSwitcher";

export default function ManagerUsersAdmin() {
    const [freelancers, setFreelancers] = useState([]); // card a ser gerenciado
    const [cardToManager, setCardToManager] = useState(0); // card a ser gerenciado
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal, post_service ou complete_view)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType("");
    };

    const handleDeleteRequest = (index) => {
        setCardToManager(index); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("delete");
    };

    const handleEditRequest = (index) => {
        setCardToManager(index); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("edit");
    };

    const handleVisualizeProposals = (index) => {
        setCardToManager(index); // Define qual card será gerenciado
        toggleOverlay();
        setOverlayType("visualize");
    };

    const handleSucessForm = (message) => {
        setOverlayType("message_popup");
        setSucessPopupMessage(message);
    }

    const handleConfirmDelete = () => {
        if (cardToManager !== null) {
            setFreelancers(freelancers.filter((_, i) => i !== cardToManager));
            setCardToManager(null);

            setOverlayType("message_popup");
            setSucessPopupMessage("Oferta de serviço excluida com sucesso.");
        }
    };

    const handleClosePopup = () => {
        setCardToManager(null);
        toggleOverlay();
    };

    useEffect(() => {
        setFreelancers([
            {
                name: "Paulo Henrique dos Anjos Silveira",
                nickname: "silveiraprecheco69",
                email: "paulohenriquelvs20@gmail.com"
            },
            {
                name: "Paulo Henrique dos Anjos Silveira",
                nickname: "silveiraprecheco69",
                email: "paulohenriquelvs20@gmail.com"
            },
            {
                name: "Paulo Henrique dos Anjos Silveira",
                nickname: "silveiraprecheco69",
                email: "paulohenriquelvs20@gmail.com"
            },
            {
                name: "Paulo Henrique dos Anjos Silveira",
                nickname: "silveiraprecheco69",
                email: "paulohenriquelvs20@gmail.com"
            },
            {
                name: "Paulo Henrique dos Anjos Silveira",
                nickname: "silveiraprecheco69",
                email: "paulohenriquelvs20@gmail.com"
            }
        ]);
    }, []);



    // <div className={styles["edit-account-form-container"]}>
    //     {renderCurrentComponent()}
    // </div>



    return (

        <div className={styles["middle-space"]}>
            <div className={styles["users-cards"]} style={{ marginTop: "0" }}>
                {freelancers.map((freelancer, index) => (
                    <UserCardForManager
                        key={index}
                        index={index}
                        onDelete={() => handleDeleteRequest(index)}
                        onEdit={() => handleEditRequest(index)}
                        onVisualizeProposals={() => handleVisualizeProposals(index)}
                        name={freelancer.name}
                        nickname={freelancer.nickname}
                        profileImage={freelancer.profileImage}
                        email={freelancer.email}
                    />
                ))}


                {isOverlayOpen && overlayType === "delete" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                        <DeleteConfirmationPopup
                            onClose={handleClosePopup}
                            onConfirm={handleConfirmDelete}
                        />
                    </motion.div>
                )}

                {isOverlayOpen && overlayType === "edit" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                        <EditServiceForm
                            onClose={() => toggleOverlay()}
                            onSucess={(message) => handleSucessForm(message)}
                            freelancerCard={freelancers[cardToManager]}
                        />
                    </motion.div>
                )}

                {isOverlayOpen && overlayType === "visualize" && (
                    <ReceivedProposalsComponent onClose={() => toggleOverlay()} />
                )}

                {overlayType === "message_popup" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                        <MessageCard
                            onClose={() => toggleOverlay()}
                            message={sucessPopupMessage}
                        />
                    </motion.div>
                )}



            </div >
        </div>

    );
}
