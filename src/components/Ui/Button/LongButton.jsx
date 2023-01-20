import React from "react";
import "./LongButton.scss";

const LongButton = (props) => {
    return (
        <button className={`btn cus-btn ${props.className}`}>
            {props.children}
        </button>
    );
};

export default LongButton;
