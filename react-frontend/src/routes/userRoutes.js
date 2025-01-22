import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/dashboard";

export const userRouter = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "*",
        element: <Dashboard />,
    },
    {
        path: "/freelancer",
        element: <Dashboard defaultElement={"freelancer"}/>,
    },
    {
        path: "/trabalho",
        element: <Dashboard defaultElement={"trabalho"} />,
    },
    {
        path: "/conta",
        element: <Dashboard defaultElement={"conta"}/>,
    },
    {
        path: "/gerenciar-publicacoes",
        element: <Dashboard defaultElement={"gerenciar-publicacoes"}/>,
    },
]);