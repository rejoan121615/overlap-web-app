import React, { useState } from "react";
import Classess from "./FormProgressBar.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";
import { Link, useRoutes, useLocation, useHref } from "react-router-dom";

const FormProgressBar = (props) => {
    const [type, setType] = useState("name");

    const location = useLocation();
    useEffect(() => {
        props.type ? setType(props.type) : null;
    }, []);

    return (
        <div className={`${Classess.ProContainer} ${props.className}`}>
            {/* left btn  */}
            {props.prev ? (
                <Link to={`${props.prev}`}>
                    <button
                        className={`${Classess.Btn} ${
                            type == "name" ? Classess.disable : ""
                        }`}
                    >
                        <FiChevronLeft className=" text-light-gray " />
                    </button>
                </Link>
            ) : null}

            {/* center  */}
            <div className=" flex-grow-1 ">
                {/* form status title  */}
                <div className={Classess.Title}>
                    {["name", "time", "availablity"].map((text, index) => {
                        return (
                            <p
                                className={`${Classess.TitleText} ${
                                    type == text ? Classess.active : ""
                                }`}
                                key={index}
                            >
                                {text}
                            </p>
                        );
                    })}
                </div>
                {/* progress bar  */}
                <div className={Classess.ProWrap}>
                    <div className={Classess.ProBg}>
                        <div className={Classess.Progress}></div>
                    </div>
                    {/* dit container  */}
                    <div className={Classess.DotWrap}>
                        {["", "", ""].map((dot, index) => {
                            return (
                                <div key={index} className={Classess.Dot}></div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* right btn  */}
            {props.next ? (
                <Link to={`${props.next}`}>
                    <button
                        className={`${Classess.Btn} ${
                            type == "availablity" ? Classess.disable : ""
                        }`}
                    >
                        <FiChevronRight className=" text-light-gray " />
                    </button>
                </Link>
            ) : null}
        </div>
    );
};

export default FormProgressBar;
