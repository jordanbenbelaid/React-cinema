import React from "react"
import logo from "../Images/CCC-Logo.png"

const Footer = () => {
    return(
        <div>
            <h5><a href="Contact.jsx">Contact us!</a></h5>
            <img style={{width:70, height:35}} id="logo" src={logo} alt="Cinema Logo"/>
        </div>
    )
}

export default Footer;