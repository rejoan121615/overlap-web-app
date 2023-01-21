import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// pages
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import NewMeetingPage from "./pages/NewMeetingPage";
// meeting sub page
import MettingName from "./pages/NewMeetingSubPage/MettingName";
// error page
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/log-in" element={<LogInPage />} />
                    <Route path="/new-meeting" element={<NewMeetingPage />}>
                        <Route index element={<Navigate to={"name"} />} />
                        <Route path="name" element={<MettingName />} />
                    </Route>
                    <Route path="/*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
