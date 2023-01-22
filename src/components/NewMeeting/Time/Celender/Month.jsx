import React, { useState, useEffect } from "react";
import moment from "moment/moment";

const Month = () => {
    const [yearDetails, setYearDetails] = useState({});
    const [monthList, setMonthList] = useState([]);

    // set month list
    useEffect(() => {
        // generate months
        const months = moment.months({});
        setMonthList(() => {
            return [...months];
        });
        /// generate months day list
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
        });
    }, []);
  
  
  console.log(moment().week(4))

    useEffect(() => {
        console.log(yearDetails);
    }, [yearDetails]);

    return (
        <div>
            <h3>september</h3>
            {/* day list  */}
        </div>
    );
};

export default Month;
