import React from "react";
import "./Our_Service_header.css";
import image from "../../res/Our_Service_Images/Header.png";
import { BsArrowRightShort } from "react-icons/bs";

function Our_Services_header() {
    return (
        <div className="header-container header-section flex">
            <div className="header-left">
                <h1>IT Solutions For Your Bussiness</h1>
                <p>Utilize performance marketing programs that are highly targeted, affordable, and efficient to leverage your bussiness.</p>
                <a href="#" className="primary-button">Learn More<BsArrowRightShort className="header-icon" /></a>
                <a href="#" className="secondary-button">Get in touch<BsArrowRightShort className="header-icon" /></a>
            </div>
            <div className="header-right">
                <div className="img-bg"></div>
                <img src={image} alt="Hero-Image" />
            </div>
        </div>
    )
}

export default Our_Services_header;