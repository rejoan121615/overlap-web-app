import React from "react";
import moment from "moment/moment";
import { Row, Col } from "react-bootstrap";
import Classess from "./Clender.module.scss";

console.log(moment().weekday(0));

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
        </div>
    );
};

export default Calender;
