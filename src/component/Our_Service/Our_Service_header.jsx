import React from "react";
import "./Our_Service_header.css";
import image from "../../res/Our_Service_Images/Header.png";
import { BsArrowRightShort } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function Our_Services_header() {
    const history = useHistory();

    const navigate = () => {
        history.push("/ContactUs")
    }
    const navigate1 = () => {
        history.push("/AboutUs")
    }


    return (
        <div className="header-container header-section flex">
            <div className="header-left">
                <h1>IT Solutions For Your Business</h1>
                <p>Utilize performance marketing programs that are highly targeted, affordable, and efficient to leverage your bussiness.</p>
                <button className="primary-button" onClick={navigate1}>Learn More<BsArrowRightShort className="header-icon" /></button>
                <button className="secondary-button" onClick={navigate}>Get in touch<BsArrowRightShort className="header-icon" /></button>
            </div>
            <div className="header-right">
                <div className="img-bg"></div>
                <img src={image} alt="Hero-Image" />
            </div>
        </div>
    )
}

export default Our_Services_header;