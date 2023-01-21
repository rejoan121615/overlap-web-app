import React from "react";
import "./scss/CreateAMeeting.scss";
import { Outlet } from "react-router-dom";

const NewMeeting = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default NewMeeting;
