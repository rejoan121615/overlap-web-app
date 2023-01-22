import React from "react";
import Classess from "./Clender.module.scss";
import Month from "./Month";

const WeekBar = () => {
    const weekList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    return (
        <div className={`shadow-card ${Classess.dayList}`}>
            {weekList.map((day, index) => {
                return (
                    <div className={Classess.day} key={index}>
                        {day}
                    </div>
                );
            })}
        </div>
    );
};

const Calender = () => {
    return (
        <div className=" shadow-card">
            <WeekBar />
            {/* month list  */}
            <Month />
        </div>
    );
};

export default Calender;
