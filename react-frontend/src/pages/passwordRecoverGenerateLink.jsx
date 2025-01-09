import HeaderNotAuth from "../components/fixed/headerNotAuth"
import Footer from "../components/fixed/footer"
import Logo from "../components/fixed/logo"

import PasswordRecoverGenerateLinkForm from "../components/forms/passwordRecoverGenerateLinkForm"

export default function PasswordRecoverGenerateLink() {
    return (
        <div>
            <HeaderNotAuth/>
            <div style={{
                height: '96vh',
                width: '100%',
                marginTop: '5vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--c-bg-secondary)",
                backgroundImage: `
                    linear-gradient(var(--linear-gradient) 0.1em, transparent 0.1em), 
                    linear-gradient(90deg, var(--linear-gradient) 0.1em, transparent 0.1em)
                `,
                backgroundSize: "4em 4em",
            }}>
                <PasswordRecoverGenerateLinkForm/>
            </div> 
            <Footer/>
        </div>
    )
}



