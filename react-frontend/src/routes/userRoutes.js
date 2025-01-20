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
        path: "/aaa",
        element: <Dashboard />,
    },
]);