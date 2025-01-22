import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminDashboard from "../pages/adminDashboard";

export const adminRouter = createBrowserRouter([
    {
        path: "/dashboard",
        element: <AdminDashboard />,
    },
    {
        path: "/*",
        element: <AdminDashboard />,
    },
]);