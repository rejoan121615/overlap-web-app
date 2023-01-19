import React from "react";
import "./Availability.scss";
import { useState } from "react";

const TimeListRow = (props) => {
  const toggleHandler = (e) => {
    e.target.classList.toggle('mark');
  }
    return (
        <div className=" time-list-row ">
            <p className=" hour">{props.time}</p>
            <div className=" hour-list">
                {props.available.map((item, index) => {
                    return <div onClick={toggleHandler} className="hour-child" key={index}></div>;
                })}
            </div>
        </div>
    );
};

const Availability = () => {
    const [week, setWeek] = useState([
        {
            date: "08/19",
            dayName: "sun",
        },
        { date: "08/20", dayName: "mon" },
        {
            date: "08/21",
            dayName: "tue",
        },
        { date: "08/22", dayName: "wed" },
        { date: "08/23", dayName: "thu" },
        {
            date: "08/24",
            dayName: "fri",
        },
        { date: "08/25", dayName: "sat" },
    ]);

    const placeholderChild = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        " ",
        "",
        "",
        "",
        "",
    ];

    const PlaceholderHourList = [
        { time: "9am", available: placeholderChild },
        { time: "10am", available: placeholderChild },
        { time: "11am", available: placeholderChild },
        { time: "12pm", available: placeholderChild },
        { time: "1pm", available: placeholderChild },
        { time: "2pm", available: placeholderChild },
        { time: "3pm", available: placeholderChild },
        { time: "4pm", available: placeholderChild },
        { time: "5pm", available: placeholderChild },
        { time: "6pm", available: placeholderChild },
        { time: "7pm", available: placeholderChild },
        { time: "8pm", available: placeholderChild },
        { time: "9pm", available: placeholderChild },
        { time: "10pm", available: placeholderChild },
        { time: "11pm", available: placeholderChild },
        { time: "12am", available: placeholderChild },
        { time: "1am", available: placeholderChild },
        { time: "2am", available: placeholderChild },
        { time: "3am", available: placeholderChild },
        { time: "4am", available: placeholderChild },
        { time: "5am", available: placeholderChild },
        { time: "6am", available: placeholderChild },
        { time: "7am", available: placeholderChild },
        { time: "8am", available: placeholderChild },
    ];
    return (
        <div>
            <h3 className=" title-20px text-center">add your availability</h3>
            {/* card  */}
            <div className="week-card">
                {/* card heading  */}
                <div className=" week-card-header">
                    <div></div>
                    <div className="week-grid">
                        {week.map((day, index) => {
                            return (
                                <div
                                    className=" d-flex justify-content-center align-items-center flex-column week-date-day-name "
                                    key={index}
                                >
                                    <p className="date">{day.date}</p>
                                    <p className="day-name">{day.dayName}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* card body  */}
                <div className="week-card-body">
                    {/* all times list  */}
                    {PlaceholderHourList.map((hour, index) => {
                        return <TimeListRow {...hour} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Availability;
