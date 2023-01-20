import React from "react";
import { Form } from "react-bootstrap";
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
                <Form className={`${Style.form}`}>
                    <Form.Group></Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;
