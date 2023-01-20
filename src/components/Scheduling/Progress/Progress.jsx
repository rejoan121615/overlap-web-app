import React from "react";
import "./Progress.scss";
import { MdArrowBackIosNew } from "react-icons/md";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Col, Row } from "react-bootstrap";

const MeetingCreationStep = () => {
    return <div className=" meeting-step">{/* meeting title  */}</div>;
};

const ProgressElement = () => {
    return (
        <div>
            <div className=" progress-container">
                <Row className=" align-items-center ">
                    <Col className=" col-1">
                        <button className=" btn back-btn">
                            <MdArrowBackIosNew size={30} />
                        </button>
                    </Col>
                    <Col className=" col-11 ">
                        <ProgressBar className="" now={60} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ProgressElement;
