import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./Contact_us.css";
import image from '../../../res/HomeImages/contact.png';
import { IoMdMail } from 'react-icons/io';
import { TiLocation } from "react-icons/ti";
import { ImPhone } from "react-icons/im";


const Contact_us = () => {
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validation = yup.object().shape({
    name: yup.string().min(2).max(15).required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    message: yup
      .string()
      .min(10 * 12)
      .max(10 * 20),
  });

  return (
    <div>
      <Formik
        initialValues={formObject}
        validationSchema={validation}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, actions) => {
          // Handle form submission
        }}
      >
        <Form>
          <div className="container">
            <article> <h1>Get in touch</h1>
            <hr className='line'></hr>
            <p className="para">We are here for you! How can we help?</p></article>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-control"                 
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    className="form-control"
                  
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="form-control"
      
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Enter your message"
                    className="form-control"
                    style={{
                      height: "100px", 
                      border: "none", 
                      backgroundColor: "rgb(241, 237, 237)", 
                    }}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-md-6 img-container">
                <img src={image} alt="Contact" className="img-fluid" />
                <div className="image-text" ><TiLocation className="icon1"/>
                  Barrackpore, Kolkata,<br></br>
                 <div class="ad"> West Bengal- 700 122</div>
                
                </div>
                <div className="image-text"><ImPhone className="icon2"/>+91 7278817473</div>
                <div className="image-text"><IoMdMail className="icon3"/>contact@clikintech.com</div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact_us;