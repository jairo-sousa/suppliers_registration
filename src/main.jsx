import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home.jsx";
import Suppliers from "./routes/suppliers.jsx";
import ErrorPage from "./routes/errorPage.jsx";

import { ConfigProvider } from "antd";

import "./styles/index.css";

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
    {
        path: "/suppliers/:supplierCode",
        element: <Suppliers />,
        errorElement: <ErrorPage />,
    },
]);

export const fakeDbUrl = "https://fake-db-suppliers.vercel.app";
let container = null;

document.addEventListener("DOMContentLoaded", function (event) {
    if (!container) {
        container = document.getElementById("root");
        const root = ReactDOM.createRoot(container);
        root.render(
            <React.StrictMode>
                <ConfigProvider theme={{ hashed: false }}>
                    <RouterProvider router={router} />
                </ConfigProvider>
            </React.StrictMode>
        );
    }
});
