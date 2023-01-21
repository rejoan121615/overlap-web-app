import React from "react";
import Classess from "../scss/NewMeetingSubPage.module.scss";
import { Form, InputGroup } from "react-bootstrap";

const MettingName = () => {
    return (
        <div>
            <h3 className={`${Classess.Title}`}>Create a Meeting</h3>
            <div className={` shadow-card ${Classess.Shadow_card}`}>
                <Form>
                    <Form.Group className=" form-group">
                        <Form.Label>Meeting Name</Form.Label>
                        <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group ></Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default MettingName;
