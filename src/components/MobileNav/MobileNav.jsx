import React from "react";
import { Nav } from "react-bootstrap";
import "./MobileNav.scss";
import { useState } from "react";
import { FiCalendar, FiPlusSquare, FiUser } from "react-icons/fi";

const MobileNav = () => {
    return (
        <Nav className=" mob-navbar d-flex justify-content-center align-items-center w-100 d-lg-none ">
            {[FiCalendar, FiPlusSquare, FiUser].map((Icon, index) => {
                return (
                    <button key={index}
                        className={` d-flex justify-content-center align-items-center btn radius ${
                            index === 1 ? "active" : ""
                        }`}
                    >
                        <Icon size={25} />
                    </button>
                );
            })}
        </Nav>
    );
};

export default MobileNav;
