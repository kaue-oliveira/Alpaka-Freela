import React, { useState, useEffect } from "react";
import styles from "../../css/home.module.css";
import JobCardForManager from "../cards/jobCardForManager";
import DeleteConfirmationPopup from "../popups/deleteConfirmationPopup";
import EditJobForm from "../forms/editJobForm";
import ReceivedProposalsComponent from "../cards/receivedProposalsComponent";
import MessageCard from "../cards/messageCard";

import { motion } from "framer-motion";

import Images from "../fixed/images";

export default function ManagerJobsAdmin() {
    const [jobs, setJobs] = useState([]); // card a ser gerenciado
    const [cardToManager, setCardToManager] = useState(0); // card a ser gerenciado
    const [overlayType, setOverlayType] = useState(""); // Tipo de overlay (contract_proposal, post_service ou complete_view)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");

    const backendDomain = process.env.BACKEND_DOMAIN;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(backendDomain + '/ofertas-trabalho', {
                    method: 'GET',
                    credentials: "include",
                });

                const result = await response.json();

                if (response.ok) {
                    let jobs = result;
                    setJobs(jobs);
                } else {
                    console.log(result);
                    setSucessPopupMessage(result)
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }

        fetchJobs();
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

    const handleEditRequest = (id) => {
        setCardToManager(id); // Define qual card será gerenciado
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
                const response = await fetch(backendDomain + '/ofertas-trabalho/' + cardToManager, {
                    method: 'DELETE',
                    credentials: "include",
                });

                const result = await response.json();

                console.log(result);

                setOverlayType("message_popup");
                setSucessPopupMessage(result);

                if (response.ok) {
                    setJobs(jobs.filter((job) => job.id !== cardToManager));
                    setCardToManager(null);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleClosePopup = () => {
        setCardToManager(null);
        toggleOverlay();
    };

    return (
        <div className={styles["middle-space"]}>
            <div className={styles["job-cards"]} style={{ marginTop: "0" }}>
                {jobs.map((job, index) => (
                    <JobCardForManager
                        key={index}
                        index={index}
                        onDelete={() => handleDeleteRequest(job.id)}
                        onEdit={() => handleEditRequest(job.id)}
                        jobData={job}
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
                        <EditJobForm
                            onClose={() => toggleOverlay()}
                            onSubmit={(message) => handleSucessForm(message)}
                            onUpdatedService={(updatedServiceData) =>
                                setJobs(jobs.map(job =>
                                    job.id === updatedServiceData.id ? updatedServiceData : job
                                ))
                            }
                            id={cardToManager}
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

            </div>
        </div>
    );
}
