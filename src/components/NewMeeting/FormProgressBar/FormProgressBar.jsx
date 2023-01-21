import React from "react";
import Classess from "./FormProgressBar.module.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FormProgressBar = () => {
    return (
        <div className=" d-flex align-items-center ">
            {/* left btn  */}
            <button className={`${Classess.Btn}`}>
                <FiChevronLeft size={28} className=" text-light-gray " />
            </button>
            {/* center  */}
            <div className=" flex-grow-1 ">
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
                <FiChevronRight size={28} className=" text-light-gray " />
            </button>
        </div>
    );
};

export default FormProgressBar;
