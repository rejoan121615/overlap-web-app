import React from "react";
import "./Header.scss";
import BrandLogo from "../../assets/Logo.png";
import Logo from "../../assets/Overlap-name.png";
import { Navbar, NavItem, NavLink, NavbarBrand, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    const navUrl = [
        { title: "home", url: "home" },
        { title: "new meeting", url: "new-meeting" },
        { title: "account", url: "account" },
    ];

    return (
        <header className="header">
            <Navbar className=" px-4  ">
                <div className=" w-100 d-flex justify-content-between align-items-center py-lg-4 max-container ">
                    <Link to={"/home"} className=" brand_logo d-lg-none ">
                        <div className=" ">
                            <img
                                className=" w-100 "
                                src={BrandLogo}
                                alt="Brand Logo"
                            />
                        </div>
                    </Link>
                    <Link to={'/'} className=" navbar-brand me-0 ">
                        <img className=" w-100" src={Logo} alt="Brand Logo" />
                    </Link>
                    {/* navbar  */}
                    <Nav className=" d-none d-lg-flex">
                        {navUrl.map((link, index) => {
                            return (
                                <NavItem key={index}>
                                    <Link
                                        to={`/${link.url}`}
                                        className=" text-capitalize nav-link"
                                    >
                                        {link.title}
                                    </Link>
                                </NavItem>
                            );
                        })}
                    </Nav>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
