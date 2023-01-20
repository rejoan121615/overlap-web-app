import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./scss/Scheduling.scss";
import LongButton from "../components/Ui/Button/LongButton";
import { FiCornerDownRight } from "react-icons/fi";
import Availability from "../components/Scheduling/Availability/Availability";
import Progress from "../components/Scheduling/Progress/Progress";

const Scheduling = () => {
    return (
        <div className=" scheduling ">
            <Header />
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
                    <Progress />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Scheduling;
