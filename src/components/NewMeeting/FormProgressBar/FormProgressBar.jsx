import React from "react";
import Classess from "./FormProgressBar.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FormProgressBar = () => {
    return (
        <div className=" d-flex align-items-center ">
            {/* left btn  */}
            <button className={`${Classess.Btn}`}>
                <FiChevronLeft size={38} className=" text-light-gray " />
            </button>
            {/* center  */}
            <div className=" flex-grow-1 ">
                {/* form status title  */}
                <div className={Classess.Title}>
                    {["name", "time", "availablity"].map((text, index) => {
                        return (
                            <p className={Classess.TitleText} key={index}>
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
            <button className={`${Classess.Btn}`}>
                <FiChevronRight size={38} className=" text-light-gray " />
            </button>
        </div>
    );
};

export default FormProgressBar;
