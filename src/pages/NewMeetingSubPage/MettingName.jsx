import React from "react";
import Classess from "../scss/NewMeetingSubPage.module.scss";
import { Form, InputGroup } from "react-bootstrap";
import FormProgressBar from "../../components/NewMeeting/FormProgressBar/FormProgressBar";
import { Row, Col } from 'react-bootstrap';

const MettingName = () => {
    return (
        <div className=" d-flex flex-column justify-content-between flex-wrap h-100 ">
            {/* meeting form  */}
            <div>
                <h3 className={`${Classess.Title}`}>Create a Meeting</h3>
                <div className={` shadow-card ${Classess.Shadow_card}`}>
                    <Form>
                        <Form.Group className=" form-group">
                            <Form.Label>Meeting Name</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group className=" form-group">
                            <Form.Label>Description</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            {/* Progress bar  */}
            <FormProgressBar />
        </div>
    );
};

export default MettingName;
