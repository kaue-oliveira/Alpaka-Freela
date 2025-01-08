import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./src/pages/home";
import Dashboard from "./src/pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "*",
    element: <Home/>,
  },
  {
    path: "/freelancer",
    element: <Dashboard/>,
  },
  {
    path: "/trabalho",
    element: <Dashboard/>,
  },
  {
    path: "/conta",
    element: <Dashboard/>,
  },
  {
    path: "/caixa-de-entrada",
    element: <Dashboard/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
