import React from "react";
import Classess from "../scss/NewMeetingSubPage.module.scss";
import { Form, InputGroup } from "react-bootstrap";
import FormProgressBar from "../../components/NewMeeting/FormProgressBar/FormProgressBar";
import LongButton from "../../components/Ui/Button/LongButton";
import { FiCornerDownRight } from "react-icons/fi";
import { Row, Col } from "react-bootstrap";

const MettingName = () => {
    return (
        <div className={`${Classess.containerWrap}`}>
            {/* meeting form  */}
            <h3 className={` d-none ${Classess.Title}`}>Create a Meeting</h3>
            {/* <div className={`${Classess.ContentGrid}`}>
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
                <FormProgressBar className={Classess.ProgressBar} />
                <div className={Classess.submitBtn}>
                    <LongButton>
                        Submit
                        <span className="icon">
                            <FiCornerDownRight />
                        </span>
                    </LongButton>
                </div>
            </div> */}
            <Row g={0} className=" h-100 justify-content-between ">
                {/* contents  */}
                <Col xs={12} className=" order-2 ">
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
                </Col>
                {/* Progress bar  */}
                <Col xs={12} className={` order-3 ${Classess.ProCol}`}>
                    <FormProgressBar className={Classess.ProgressBar} />
                </Col>
                {/* submit btn  */}
                <Col xs={12} className={` order-1 ${Classess.submitBtn}`}>
                    <div className={Classess.submitBtn}>
                        <LongButton>
                            Submit
                            <span className="icon">
                                <FiCornerDownRight />
                            </span>
                        </LongButton>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default MettingName;
