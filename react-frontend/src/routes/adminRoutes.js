import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/admin/dashboard";

export const adminRouter = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/*",
        element: <Dashboard />,
    },
]);