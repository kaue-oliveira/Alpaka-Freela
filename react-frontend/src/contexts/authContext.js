import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [auth, setAuth] = useState(() => {
        // Recupera o estado do localStorage ao carregar
        const storedAuth = localStorage.getItem("auth");
        return storedAuth ? JSON.parse(storedAuth) : false;
    });

    const [userData, setUserData] = useState(() => {
        const storedUserData = localStorage.getItem("userData");
        return storedUserData ? JSON.parse(storedUserData) : null;
    });

    useEffect(() => {
        // Salva o estado no localStorage sempre que ele mudar
        localStorage.setItem("auth", JSON.stringify(auth));
        localStorage.setItem("userData", JSON.stringify(userData));
    }, [auth, userData]);

    return (
        <AuthContext.Provider value={{ auth, setAuth, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
