import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />}>
                    <Route index element={<SignUpPage />} />
                    <Route path="/log-in" element={<LogInPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
