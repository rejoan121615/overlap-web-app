import React from "react";
import MeetingMask from "../../HOC/MeetingMask";
import Classess from "../scss/NewMeetingSubPage.module.scss";
import Calender from "../../components/NewMeeting/Time/Celender/Calender";

const MeetingTime = (props) => {
    console.log(props);
    return (
        <MeetingMask type="time" {...props}>
            <div className={`${Classess.ContentCard}`}>
                <div className={`${Classess.SecTitleWrap}`}>
                    <h3 className={Classess.SecTitle}>Date Range</h3>
                    <p className={Classess.SecText}>
                        Select dates and times that you’d like for your group to
                        pick from
                    </p>
                </div>
                <Calender />
            </div>
        </MeetingMask>
    );
};

export default MeetingTime;
