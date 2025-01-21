import HeaderNotAuth from "../components/fixed/headerNotAuth";
import { useState } from "react";
import Footer from "../components/fixed/footer";
import Logo from "../components/fixed/logo";
import MessageCard from "../components/cards/messageCard";

import PasswordRecoverGenerateLinkForm from "../components/forms/passwordRecoverGenerateLinkForm";

export default function PasswordRecoverGenerateLink() {
    const [message, setMessage] = useState(null);

    const closeMessageCard = () => {
        setMessage(null);
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
                <PasswordRecoverGenerateLinkForm onSubmit={(message) => setMessage(message)} />
            </div>
            <Footer />
            {message && (
                <MessageCard
                    onClose={() => closeMessageCard()}
                    message={message}
                />
            )}
        </div>
    );
}
