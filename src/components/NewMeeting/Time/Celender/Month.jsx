import React, { useState, useEffect } from "react";
import moment from "moment/moment";

const Month = () => {
    const [monthClenderDetails, setMonthClenderDetails] = useState();
    const [monthList, setMonthList] = useState([]);

    // set month list
    useEffect(() => {
        // generate months
        const months = moment.months();
        setMonthList(() => {
            return [...months];
        });
        /// generate months day list
        // monthList.map((month, monthIndex) => {
        //     var monthIndex = a;
        //     var names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        //     var date = new Date(2023, monthIndex, 1);
        //     var result = [];
        //     while (date.getMonth() == monthIndex) {
        //         result.push(date.getDate() + "-" + names[date.getDay()]);
        //         date.setDate(date.getDate() + 1);
        //     }
        //     // console.log(result);
        // });
    }, []);

    // for (let a = 0; a <= 11; a++) {
    //     var monthIndex = a;
    //     var names = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    //     var date = new Date(2023, monthIndex, 1);
    //     var result = [];
    //     while (date.getMonth() == monthIndex) {
    //         result.push(date.getDate() + "-" + names[date.getDay()]);
    //         date.setDate(date.getDate() + 1);
    //     }
    //     // console.log(result);
    // }

    return (
        <div>
            <h3>september</h3>
            {/* day list  */}
        </div>
    );
};

export default Month;
