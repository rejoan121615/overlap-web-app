import React from "react";
import MobileNav from "../MobileNav/MobileNav";
import './Footer.scss'

const LgFooterbar = () => {
    const links = [
        {
            title: "help",
            url: "",
        },
        {
            title: "contact",
            url: "",
        },
        {
            title: "about us",
            url: "",
        },
    ];

    return (
        <div className=" d-none d-lg-flex justify-content-center align-items-center lg-footer  ">
            {links.map((link, index) => {
                return <a key={index} href={link.url}>{link.title} </a>;
            })}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className=" position-absolute bottom-0 w-100 ">
            <MobileNav />
            <LgFooterbar />
        </footer>
    );
};

export default Footer;
