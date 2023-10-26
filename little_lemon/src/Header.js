import React from "react";
import Logo from "./img/Logo.jpg";
import './Header.css';
import Nav from "./Nav";

function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo"/>
            <Nav></Nav>
        </header>
    );
}

export default Header;