import React, { Fragment } from "react";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import FormLogo from "../assets/overlap-name.png";
import "./scss/FormsPage.scss";
import { CgCornerDownRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import HowOverlapHelping from "../components/HowOverlapHelping/HowOverlapHelping";

const SignUpPage = () => {
    return (
        <Fragment>
            <div className=" d-flex flex-column align-items-center justify-content-between h-100 ">
                <div className=" w-100 ">
                    <div className=" shadow-card form-wrapper ">
                        <div className="form-container">
                            <legend>
                                Welcome To{" "}
                                <img src={FormLogo} alt="Verlap Logo" />{" "}
                            </legend>
                            <Form className={``}>
                                <Form.Group>
                                    <Row className=" gx-3 mb-3 ">
                                        <Col>
                                            <Form.Control
                                                className=" round-element bg-light-gray-btn border-0"
                                                type="email"
                                                placeholder="First Name"
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Control
                                                className=" round-element bg-light-gray-btn border-0  "
                                                type="password"
                                                placeholder="Last Name"
                                            />
                                        </Col>
                                    </Row>
                                    <Form.Control
                                        className=" round-element bg-light-gray-btn border-0 mb-3"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <Form.Control
                                        className=" round-element bg-light-gray-btn border-0 mb-3"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Form.Control
                                        className=" round-element bg-light-gray-btn border-0  "
                                        type="password"
                                        placeholder="Re-Enter Password"
                                    />
                                </Form.Group>
                                <Form.Group className=" submit-wrap d-flex justify-content-end px-3">
                                    <button
                                        type="submit"
                                        className={`round-element cus-btn submitBtn`}
                                    >
                                        Sign Up{" "}
                                        <CgCornerDownRight
                                            style={{ strokeWidth: "1px" }}
                                        />
                                    </button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <p className=" text-center text-12px my-20px">Or</p>
                    <div className=" text-center ">
                        <Link to={"/log-in"} className=" d-inline-block ">
                            <button className=" form-change-btn ">
                                Log In
                            </button>
                        </Link>
                    </div>
                </div>
                {/* how overlap help  */}
                <HowOverlapHelping />
            </div>
        </Fragment>
    );
};

export default SignUpPage;
