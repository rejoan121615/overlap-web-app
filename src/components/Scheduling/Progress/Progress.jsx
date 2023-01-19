import React from "react";
import "./Progress.scss";
import { MdArrowBackIosNew } from "react-icons/md";

const MeetingCreationStep = () => {
    return <div className=" meeting-step">{/* meeting title  */}</div>;
};

const Progress = () => {
    return (
        <div className=" d-flex align-items-center justify-content-between progress-container">
            <button className=" btn back-btn">
                <MdArrowBackIosNew size={30} />
            </button>
            {/* progress bar  */}
            <div className=" progress-line flex-grow-1 ">
                <div className=" pro-line-bg"></div>
            </div>
            {/* button right  */}
            <button className=" btn back-btn">
                <MdArrowBackIosNew size={30} />
            </button>
        </div>
    );
};

export default Progress;
