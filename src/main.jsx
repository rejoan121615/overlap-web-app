import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import CreateAMeetingPage from "./pages/CreateAMeetingPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/log-in" element={<LogInPage />} />
                    <Route path="/create-a-meeting" element={<CreateAMeetingPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
