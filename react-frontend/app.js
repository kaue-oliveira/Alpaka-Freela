import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { userRouter } from "./src/routes/userRoutes";
import { adminRouter } from "./src/routes/adminRoutes";
import { noAuthRouter } from "./src/routes/noAuthRoutes";
import { AuthContext } from "./src/contexts/authContext";

function App() {
    const { auth, userData } = useContext(AuthContext);
    
    let router = noAuthRouter;

    if (auth) router = (userData.role === "[ROLE_USER]") ? userRouter : adminRouter;

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;