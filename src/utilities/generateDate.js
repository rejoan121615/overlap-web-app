function GenerateDate(monthIndex) {
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
    // setYearDetails((prev) => {
    //     const copyMonth = { ...prev };
    //     copyMonth[monthName.toLowerCase()] = [...result];
    //     return copyMonth;
    // });
    // set year details as list
    // setYearDetailsList((prev) => {
    //     const copyMonth = { ...prev };
    //     copyMonth[monthIndex] = [...result];
    //     copyMonth[monthIndex].name = monthName;
    //     return copyMonth;
    // });
  console.log('do something')
}

export default GenerateDate;
