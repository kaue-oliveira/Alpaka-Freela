import HeaderNotAuth from "../components/fixed/headerNotAuth";
import Footer from "../components/fixed/footer";
import { useState } from "react";
import MessageCard from "../components/cards/messageCard";

import LoginForm from "../components/forms/loginForm";

export default function Login() {
    const [sucessPopupMessage, setSucessPopupMessage] = useState("");
    const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Controle do overlay

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    const handleSubmitForm = (message) => {
        setSucessPopupMessage(message);
        setIsOverlayOpen(true);
    }

    return (
        <div>
            <HeaderNotAuth />
            <div
                style={{
                    height: "96vh",
                    width: "100%",
                    marginTop: "5vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--c-bg-secondary)",
                    backgroundImage: `
                    linear-gradient(var(--linear-gradient) 0.1em, transparent 0.1em), 
                    linear-gradient(90deg, var(--linear-gradient) 0.1em, transparent 0.1em)
                `,
                    backgroundSize: "4em 4em",
                }}
            >
                <LoginForm onSubmit={(message) => handleSubmitForm(message)}/>
            </div>
            <Footer />
            {isOverlayOpen && (
                <MessageCard
                    onClose={() => toggleOverlay()}
                    message={sucessPopupMessage}
                />
            )}
        </div>
    );
}
