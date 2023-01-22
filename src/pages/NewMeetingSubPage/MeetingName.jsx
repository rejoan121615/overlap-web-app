import React, { useState } from "react";
import Classess from "../scss/NewMeetingSubPage.module.scss";
import { Form } from "react-bootstrap";
import MeetingMask from "../../HOC/MeetingMask";

const MettingName = (props) => {
    const [name, setName] = useState("Biology Study Group");
    const [description, setDescription] = useState("");

    const meetingNameHandler = (e) => {
        setName(e.target.value);
    };

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    };

    return (
        <MeetingMask {...props} type="name">
            <div className={`${Classess.ContentCard}`}>
                <div className={Classess.SecTitleWrap}>
                    <h3 className={Classess.SecTitle}>create a meeting</h3>
                </div>
                <div className={` shadow-card ${Classess.Shadow_card}`}>
                    <Form>
                        <Form.Group className=" form-group">
                            <Form.Label>Meeting Name</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={meetingNameHandler}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please enter your meeting name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className=" form-group">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={descriptionHandler}
                            ></Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </MeetingMask>
    );
};

export default MettingName;
