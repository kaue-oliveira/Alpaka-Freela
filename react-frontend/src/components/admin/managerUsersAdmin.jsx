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
import MessageCard from "../cards/messageCard";

export default function ManagerUsersAdmin() {
    const [users, setUsers] = useState([]);
    const [cardToManager, setCardToManager] = useState(0);
    const [overlayType, setOverlayType] = useState("");
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(backendDomain + '/usuario/listar-todos', {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    setUsers(result);
                } else {
                    console.log(result);
                    alert(result);
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }

        fetchUsers();
    }, []);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
        setOverlayType("");
    };

    const handleDeleteRequest = (id) => {
        setCardToManager(id); // Define qual card será gerenciado
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

    const handleConfirmDelete = async () => {
        if (cardToManager !== null) {
            try {
                console.log(cardToManager);

                const response = await fetch(backendDomain + '/usuario/' + cardToManager, {
                    method: 'DELETE',
                    credentials: "include",
                });

                const result = await response.json();


                if (response.ok) {
                    setUsers(users.filter(user => user.id !== cardToManager));
                    setCardToManager(null);
                } 
  
                setOverlayType("message_popup");
                setSucessPopupMessage(result);
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
    };

    const handleClosePopup = () => {
        setCardToManager(null);
        toggleOverlay();
    };

    return (

        <div className={styles["middle-space"]}>
            <div className={styles["users-cards"]} style={{ marginTop: "0" }}>
                {users && users.map((user, index) => (
                    <UserCardForManager
                        key={index}
                        index={index}
                        onDelete={() => handleDeleteRequest(user.id)}
                        userData={user}
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


                {overlayType === "message_popup" && (
                    <MessageCard
                        onClose={() => toggleOverlay()}
                        message={sucessPopupMessage}
                    />
                )}
            </div >
        </div>

    );
}
