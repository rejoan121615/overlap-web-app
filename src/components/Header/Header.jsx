import React from "react";
import Styles from "./Header.modules.scss";
import BrandLogo from "../../assets/Logo.png";
import Logo from "../../assets/Overlap-name.png";
import { Navbar, NavItem, NavLink, NavbarBrand, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <header className="header">
            {/* <nav className="navbar navbar-expand-lg">
                <div className={` container `}>
                    <a className=" navbar-brand " href="">
                        <img src={BrandLogo} alt="Brand Logo" />
                    </a>
                </div>
            </nav> */}
            <Navbar className=" px-4 d-flex justify-content-between align-items-center ">
                <div className=" brand_logo">
                    <img
                        className=" w-100 "
                        src={BrandLogo}
                        alt="Brand Logo"
                    />
                </div>
                <NavbarBrand className=" me-0 ">
                    <img
                        className=" w-100"
                        src={Logo}
                        alt="Brand Logo"
                    />
                </NavbarBrand>
                {/* navbar  */}
                <Nav className=" d-none">
                    {["home", "new metting", "account"].map((link) => {
                        return (
                            <NavItem>
                                <NavLink className=" text-capitalize ">
                                    {link}
                                </NavLink>
                            </NavItem>
                        );
                    })}
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;
