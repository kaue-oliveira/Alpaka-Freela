import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import PasswordRecoverGenerateLink from "../pages/passwordRecoverGenerateLink";
import PasswordRecover from "../pages/passwordRecover";

export const noAuthRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Home />,
    },
    {
        path: "/registrar",
        element: <Register />,
    },
    {
        path: "/entrar",
        element: <Login />,
    },
    {
        path: "/recuperar-senha-gerar-link",
        element: <PasswordRecoverGenerateLink />,
    },
    {
        path: "/recuperar-senha",
        element: <PasswordRecover />,
    },
]);