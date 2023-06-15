import React from 'react';
import './Footer.css';
import logo from './res/logo.png';
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
        <div className="container">
          <div className="row ">
            <div className="col-md-2">
              <img src={logo} alt="Logo" className="footer-logo mb-4" />
              <h5 className="footer-title">We are a digital<br></br> marketing agency</h5>
              <IconContext.Provider value={{ className: 'top-react-icons' }}>
                <FaInstagram onClick={openInstagram} />
                <FaFacebook onClick={openFacebook} />
                <FaTwitter onClick={opentwitter} />
                <FaGithub onClick={opengithub} />
              </IconContext.Provider>
            </div>
            <div className="col-md-3">
              
              <ul className="list-unstyled">
                <li><h5><strong>Services</strong></h5></li>
                <li><a href="/">Digital marketing</a></li>
                <li><a href="/">Web development</a></li>
                <li><a href="/">Mobile App Development</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              
              <ul className="list-unstyled">
                <li><h5><strong>Home</strong></h5></li>
                <li><a href="/">Career</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              
              <ul className="list-unstyled">
                <li><h5><strong>Resources</strong></h5></li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              
              <ul className="list-unstyled">
                <li><h5><strong>Contact</strong></h5></li>
                <li>Barrackpore</li>
                <li>Kolkata- 122</li>
                <li>West Bengal</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-dark bg-light py-4 mb-0">Copyright 2023, All Rights Reserved by Clikin Tech</p>
    </div>
    
    
    );
}

export default Footer;
