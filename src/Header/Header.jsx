import React from "react";
import logo from "../Images/CCC-Logo.png"

const Header = () => {
    return(
            <>
            <div className="justify-content-center align-items-center">
                    <img id="logo" src={logo} alt="Cinema Logo"/>
                    <h1>Cinema!</h1>
            </div>

            <nav>
                <div className="justify-content-center align-items-center">
                   <h3>
                    <a href="/">Home</a>
                    <a href="contact"> Contact Us</a>
                    <a href="listings"> Listings</a>
                    <a href="schedule"> Schedule</a>
                   </h3> 
                </div>
            </nav>
            </>
    )
}

export default Header;