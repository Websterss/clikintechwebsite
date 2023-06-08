import React from 'react';
import './Footer.css';
import logo from '../res/logo.png';
import { IconContext } from "react-icons"; 
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer(){
  const openFacebook = () => {
    window.open("https://www.facebook.com", "_blank");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com", "_blank");
  };
  const opentwitter = () => {
    window.open("https://www.twitter.com", "_blank");
  };
  const opengithub = () => {
    window.open("https://www.github.com", "_blank");
  };
    return(
        <div>
        <footer className="footer">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-menu">
          <ul className="footer-menu-column">
            <li>
                <li class="footer-title">We are a digital<br></br>marketing agency</li>
                <IconContext.Provider value={{ className: "top-react-icons" }}> 
                <FaInstagram onClick={openInstagram}/>
                <FaFacebook onClick={openFacebook}/>
                <FaTwitter onClick={opentwitter}/>
                <FaGithub onClick={opengithub}/>
                </IconContext.Provider>  
            </li>
          </ul>
          <ul className="footer-menu-column">
            <li>
              <a href=""><strong>Services</strong></a>
            </li>
            <li>
              <a href="">Digital marketing</a>
            </li>
            <li>
              <a href="">Web development</a>
            </li>
            <li>
              <a href="">Mobile App Development</a>
            </li>
          </ul>
          <ul className="footer-menu-column">
            <li>
              <a href=""><strong>Home</strong></a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul className="footer-menu-column">
            <li><strong>Resources</strong></li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
          <ul className="footer-menu-column">
            <li><strong>Contact</strong></li>
            <li>Barrackpore</li>
            <li>Kolkata- 122</li> 
            <li>West Bengal</li>
          </ul>
          
        </div>
      </footer>
      <p class="copyright">Copyright 2023, All Rights Reserved by Clikin Tech</p>
      </div>
    
    
    );
}

export default Footer;