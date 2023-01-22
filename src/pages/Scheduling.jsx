import React, { Fragment } from "react";
import "./scss/Scheduling.scss";
import LongButton from "../components/Ui/Button/LongButton";
import { FiCornerDownRight } from "react-icons/fi";
import Availability from "../components/Scheduling/Availability/Availability";
import FormProgressBar from "../components/NewMeeting/FormProgressBar/FormProgressBar";

const Scheduling = () => {
    return (
        <div className=" scheduling ">
            <div className=" availability">
                {/* submit btn  */}
                <div className="btn-wrap">
                    <LongButton>
                        Submit
                        <span className="icon">
                            <FiCornerDownRight />
                        </span>
                    </LongButton>
                </div>
                {/* availablity content  */}
                <div className=" availablity-calender">
                    <Availability />
                </div>
                {/* form progress  */}
                <div className="step">
                    <FormProgressBar />
                </div>
            </div>
        </div>
    );
};

export default Scheduling;
