import React from "react";
import Logo from "./img/Logo.jpg";

function Header(){
    return(
        <div>
            <img src={Logo} alt="Logo"/>
        </div>
    );
}

export default Header;