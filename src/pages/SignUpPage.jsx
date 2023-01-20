import React from "react";
import { Form, FormControl } from "react-bootstrap";
import FormLogo from "../assets/overlap-name.png";
import Style from "./scss/SignUpPage.module.scss";
import GoogleBtn from "../components/Ui/WithGoogleBtn/GoogleBtn";

const SignUpPage = () => {
    return (
        <div className=" shadow-card form-wrapper ">
            <div className="form-container">
                <legend>
                    Welcome To <img src={FormLogo} alt="Verlap Logo" />{" "}
                </legend>
                {/* google button  */}
                <GoogleBtn />
                {/* or text  */}
                <p className=" text-16px my-3 text-center ">or</p>
                <Form className={`${Style.form}`}>
                    <Form.Group>
                        <Form.Control
                            className=" round-element bg-light-gray-btn border-0 mb-2"
                            type="email"
                            placeholder="Email"
                        />
                        <Form.Control
                            className=" round-element bg-light-gray-btn border-0  "
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;
