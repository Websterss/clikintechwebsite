import React from 'react';
import './Footer.css';
import logo from '../../res/logo.png';
import { IconContext } from 'react-icons';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
  const openFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };
  const openInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };
  const opentwitter = () => {
    window.open('https://www.twitter.com', '_blank');
  };
  const opengithub = () => {
    window.open('https://www.github.com', '_blank');
  };
  return (
    <div className='div-footer'>
      <footer className="footer">
        <div className="container ff">
          <div className="row ">
            <div className="col-md-2">
              <img src={logo} alt="Logo" className="footer-logo mb-4" />
              <h5 className="footer-title">We are a digital<br></br> marketing agency</h5>
              <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <span className="top-react-icons1" onClick={openInstagram}>
                <FaInstagram />
              </span>
              <span className="top-react-icons2" onClick={openFacebook}>
                <FaFacebook />
              </span>
              <span className="top-react-icons3" onClick={opentwitter}>
                <FaTwitter />
              </span>
              <span className="top-react-icons4" onClick={opengithub}>
                <FaGithub />
              </span>
            </IconContext.Provider>

            </div>
            <div className="col-md-3">
              
              <ul className="list-unstyled">
                <li><h5><strong>Services</strong></h5></li>
                <li><a href="/Services">Digital marketing</a></li>
                <li><a href="/Services">Web development</a></li>
                <li><a href="/Services">Mobile App Development</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              
              <ul className="list-unstyled">
                <li><h5><strong>Home</strong></h5></li>
                <li><a href="/Career">Career</a></li>
                <li><a href="/AboutUs">About</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/ContactUs">Contact Us</a></li>
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
