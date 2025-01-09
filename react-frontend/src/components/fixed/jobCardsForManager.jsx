import React, { useState } from "react";
import styles from "../../css/home.module.css";
import JobCardForManager from "../cards/jobCardForManager";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditJobForm from "../forms/editJobForm";

export default function JobCardsForManager() {
    const [cards, setCards] = useState([0, 1, 2, 3, 4]); // Lista inicial de IDs fictícios
    const [cardToDelete, setCardToDelete] = useState(null); // Card a ser excluído
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const handleDeleteRequest = (index) => {
        setCardToDelete(index); // Define qual card será excluído
    };

    const handleEditRequest = (index) => {
        toggleOverlay();
    };

    const handleConfirmDelete = () => {
        if (cardToDelete !== null) {
            setCards(cards.filter((_, i) => i !== cardToDelete)); // Remove o card
            setCardToDelete(null); // Fecha o pop-up
        }
    };

    const handleClosePopup = () => {
        setCardToDelete(null); // Fecha o pop-up sem excluir
    };

    return (
        <div className={styles["job-cards"]}>
            {cards.map((card, index) => (
                <JobCardForManager
                    key={index}
                    index={index}
                    onDelete={() => handleDeleteRequest(index)}
                    onEdit={() => handleEditRequest(index)}
                />
            ))}

            {/* Exibe o pop-up de confirmação se necessário */}
            {cardToDelete !== null && (
                <DeleteConfirmationPopup
                    onClose={handleClosePopup}
                    onConfirm={handleConfirmDelete}
                />
            )}

            {isOverlayOpen && <EditJobForm onClose={() => toggleOverlay()} />}
        </div>
    );
}
