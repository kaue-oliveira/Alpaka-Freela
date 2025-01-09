import React, { useState } from "react";
import styles from "../../css/home.module.css";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditServiceForm from "../forms/editServiceForm"
import FreelancerCardForManager from "../cards/freelancerCardForManager";

export default function FreelancerCardsForManager() {
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
    <div className={styles["cards"]}>
      {cards.map((card, index) => (
        <FreelancerCardForManager
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

        {isOverlayOpen && (
          <EditServiceForm onClose={() => toggleOverlay()}/>
        )}
    </div>
  );
}