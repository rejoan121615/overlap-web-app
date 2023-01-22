import React, { useState, useEffect } from "react";
import moment, { isMoment } from "moment/moment";
import GenerateDate from "../../../../utilities/generateDate";
import Classess from "./Calender.module.scss";

const Month = () => {
    const [yearDetails, setYearDetails] = useState({});
    const [yearDetailsList, setYearDetailsList] = useState([]);

    const [monthList, setMonthList] = useState([]);

    // set month list
    useEffect(() => {
        // generate months
        const months = moment.months({});
        setMonthList(() => {
            return [...months];
        });
    }, []);

    useEffect(() => {
        monthList.map((monthName, monthIndex) => {
            var names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
            var date = new Date(2023, monthIndex, 1);
            var result = [];
            while (date.getMonth() == monthIndex) {
                result.push({
                    date: date.getDate(),
                    name: names[date.getDay()],
                });
                date.setDate(date.getDate() + 1);
            }
            // console.log(result);
            // set year details
            setYearDetails((prev) => {
                const copyMonth = { ...prev };
                copyMonth[monthName.toLowerCase()] = [...result];
                return copyMonth;
            });
            // set year details as list
            setYearDetailsList((prev) => {
                const copyMonth = { ...prev };
                copyMonth[monthIndex] = [...result];
                copyMonth[monthIndex].name = monthName;
                return copyMonth;
            });
        });

        console.log(moment("2023-04-01").weeks());
    }, [monthList]);

    return (
        <div className={Classess.calenderContainer}>
            {Object.keys(yearDetails).map((month, index, list) => {
                return (
                    <div key={index}>
                        <h1>{month}</h1>

                        <div className={Classess.dateWrap}>
                            {yearDetails[month].map((day, index) => {
                                return (
                                    <div
                                        className={Classess.DateShadow}
                                        key={index}
                                    >
                                        <div className={Classess.Date}>
                                            <p>{day.date}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Month;
