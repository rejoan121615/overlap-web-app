import React, { Fragment } from "react";
import { Form, FormControl } from "react-bootstrap";
import FormLogo from "../assets/overlap-name.png";
import "./scss/FormsPage.scss";
import GoogleBtn from "../components/Ui/WithGoogleBtn/GoogleBtn";
import { CgCornerDownRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import HowOverlapHelping from "../components/HowOverlapHelping/HowOverlapHelping";

const LoginPage = () => {
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
                            {/* google button  */}
                            <GoogleBtn />
                            {/* or text  */}
                            <p className=" text-16px my-3 text-center ">or</p>
                            <Form className={``}>
                                <Form.Group>
                                    <Form.Control
                                        className=" round-element bg-light-gray-btn border-0 mb-3"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <Form.Control
                                        className=" round-element bg-light-gray-btn border-0  "
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <Form.Group className=" submit-wrap d-flex justify-content-between align-items-center px-3">
                                    <a
                                        href=""
                                        className=" text-light-gray text-12px "
                                    >
                                        Forgot password?
                                    </a>
                                    <Link to={"/new-meeting"}>
                                        <button
                                            type="submit"
                                            className={`round-element cus-btn submitBtn`}
                                        >
                                            Log in{" "}
                                            <CgCornerDownRight
                                                style={{ strokeWidth: "1px" }}
                                            />
                                        </button>
                                    </Link>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <p className=" text-center text-12px my-20px">Or</p>
                    <div className=" text-center ">
                        <Link to={"/sign-up"} className=" d-inline-block ">
                            <button className=" form-change-btn ">
                                Sign Up With Email
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

export default LoginPage;
