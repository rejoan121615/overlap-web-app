import React from "react";
import Styles from "./HowOverlapHelping.module.scss";
import { Link } from "react-router-dom";

const HowOverlapHelping = () => {
    return (
        <div
            className={`d-flex align-items-center justify-content-between w-100 ${Styles.overlapWrap}`}
        >
            <p className=" mb-0 text-16px text-dark-gray ">Hove can Overlap help you?</p>
            <Link to={"/overlap-overview"} className=" d-inline-block ">
                <button className={`cus-btn ${Styles.overlapHelpBtn}`}>
                    Learn More
                </button>
            </Link>
        </div>
    );
};

export default HowOverlapHelping;
