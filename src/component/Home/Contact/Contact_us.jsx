import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import image from '../../../res/HomeImages/contact.png';
import { IoMdMail } from 'react-icons/io';
import { TiLocation } from "react-icons/ti";
import { ImPhone } from "react-icons/im";


const Contact_us = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7um1nss', 'template_6vkfrxg', form.current, 'DhM3EP4ecpg8d5zrt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>

       
          <div className="container">
            <article> <h1>Get in touch</h1>
            <hr className='line'></hr>
            <p className="para">We are here for you! How can we help?</p></article>
           
            <div className="row">
              <div className="col-md-6">
              <form ref={form} onSubmit={sendEmail}>
              <input
                   type="text"
                    name="user_name"
                     placeholder="Enter your name"
                     className="form-control"                 
                   required/>
    <input
                    type="email"
                   name="user_email"
                     placeholder="Enter your email"
                     className="form-control"                 
                required   />

<input
                    type="number"
                    name="phone"
                     placeholder="Enter your phone"
                     className="form-control"                 
                  required />

                 <textarea
                     type='text'
                     name="message"
                     placeholder="Enter your message"
                                          className="form-control"
                 style={{
                      height: "100px", 
                       border: "none", 
                       backgroundColor: "rgb(241, 237, 237)", 
                     }} required/>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                </form>
                
              </div>
              <div className="col-md-6 img-container">
                <img src={image} alt="Contact" className="img-fluid" />
                <div className="image-text"><TiLocation className="icon1"/>
                  Barrackpore, Kolkata,<br></br>
                  <div class="ad"> West Bengal- 700 122</div>
                </div>
                <div className="image-text"><ImPhone className="icon2"/>+91 7278817473</div>
                <div className="image-text"><IoMdMail className="icon3"/>contact@clikintech.com</div>
              </div>
            </div>
          </div>
      
      {/* </Formik> */}
    </div>
  );
};

export default Contact_us;