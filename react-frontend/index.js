import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./src/pages/home";
import Dashboard from "./src/pages/dashboard";
import Register from "./src/pages/register";
import Login from "./src/pages/login";
import PasswordRecoverGenerateLink from "./src/pages/passwordRecoverGenerateLink";
import PasswordRecover from "./src/pages/passwordRecover";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <Home />,
    },
    {
        path: "/freelancer",
        element: <Dashboard />,
    },
    {
        path: "/trabalho",
        element: <Dashboard />,
    },
    {
        path: "/conta",
        element: <Dashboard />,
    },
    {
        path: "/gerenciar-publicacoes",
        element: <Dashboard />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
