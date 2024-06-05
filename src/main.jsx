import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home.jsx";
import Suppliers from "./routes/suppliers.jsx";
import ErrorPage from "./routes/errorPage.jsx";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/suppliers",
        element: <Suppliers />,
        errorElement: <ErrorPage />,
    },
]);

export const fakeDbUrl = "https://fake-db-suppliers.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
