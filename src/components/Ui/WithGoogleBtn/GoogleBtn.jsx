import React from "react";
import Styles from "./GoogleBtn.module.scss";
import LongButton from "../Button/LongButton";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
    return (
        <LongButton
            className={` d-flex align-items-center justify-content-center bg-white ${Styles.googleBtn}`}
        >
            {" "}
            <FcGoogle className=" me-2" size={20} /> Continue with Google
        </LongButton>
    );
};

export default GoogleBtn;
