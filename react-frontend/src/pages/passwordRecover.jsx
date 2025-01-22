import HeaderNotAuth from "../components/fixed/headerNotAuth";
import Footer from "../components/fixed/footer";
import MessageCard from "../components/cards/messageCard";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PasswordRecoverForm from "../components/forms/passwordRecoverForm";

export default function PasswordRecover() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search); 
        let token = params.get('token');

        if (!token) {
            navigate("/");
        }
    }, []);

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
                <PasswordRecoverForm onSubmit={(message) => setMessage(message)} />
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
