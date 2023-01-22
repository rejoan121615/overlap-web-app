import React, { useState } from "react";
import Classess from "../scss/NewMeetingSubPage.module.scss";
import { Form } from "react-bootstrap";
import FormProgressBar from "../../components/NewMeeting/FormProgressBar/FormProgressBar";
import LongButton from "../../components/Ui/Button/LongButton";
import { FiCornerDownRight } from "react-icons/fi";

const MettingName = () => {
    const [type, setType] = useState("name");
    const [name, setName] = useState("Biology Study Group");
    const [description, setDescription] = useState('');

    const meetingNameHandler = (e) => {
        setName(e.target.value);
    } 

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }
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
                <div className={`${Classess.ContentCard}`}>
                    <h3 className={Classess.SecTitle}>create a meeting</h3>
                    <div className={` shadow-card ${Classess.Shadow_card}`}>
                        <Form>
                            <Form.Group className=" form-group">
                                <Form.Label>Meeting Name</Form.Label>
                                <Form.Control value={name} onChange={meetingNameHandler}  ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your meeting name
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className=" form-group">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={description} onChange={descriptionHandler}></Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                {/* Progress bar  */}
                <FormProgressBar className={Classess.ProgressBar} />
                {/* submit btn  */}
                {type === "name" ? null : (
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

export default MettingName;
