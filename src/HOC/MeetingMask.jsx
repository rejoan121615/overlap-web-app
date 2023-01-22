import React, { useEffect, useState } from "react";
import Classess from "../pages/scss/NewMeetingSubPage.module.scss";
import { Form } from "react-bootstrap";
import FormProgressBar from "../components/NewMeeting/FormProgressBar/FormProgressBar";
import LongButton from "../components/Ui/Button/LongButton";
import { FiCornerDownRight } from "react-icons/fi";

const MeetingMask = (props) => {
    const [type, setType] = useState("");

    useEffect(() => {
        setType(props.type);
    }, []);

    return (
        <div className={`${Classess.containerWrap}`}>
            {/* meeting form  */}
            <div className=" d-none d-lg-block ">
                <h3 className={`${Classess.Title}`}>Create a Meeting</h3>
            </div>
            <div
                className={`${Classess.ContentGrid} ${
                    type == "name" ? Classess.name : null
                }`}
            >
                {/* the componet wil mount here  */}
                <div className={`${Classess.ContentCard}`}>
                    {props.children}
                </div>
                {/* Progress bar  */}
                <FormProgressBar {...props} className={Classess.ProgressBar} />
                {/* submit btn  */}
                {false && (
                    <div className={Classess.submitBtn}>
                        <LongButton>
                            Submit
                            <span className="icon">
                                <FiCornerDownRight />
                            </span>
                        </LongButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MeetingMask;
