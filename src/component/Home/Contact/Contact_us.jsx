import { React, useState } from "react";
import { Formik , Form } from "formik";
import * as yup from "yup";
import "./Contact_us.css";

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
      .email(" please enter your valid email"),
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
      >
        <Form>
          <div className="container">
            <h1>Get in touch</h1>
            <p>We are here for you! How can we help ? </p>
            <div>
              {" "}
              <input type="text" name="name" placeholder="enter your name" />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="enter your email-address"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="enter your phone no."
              />
            </div>
            <div>
              {" "}
              <input
                type="text"
                name="message"
                placeholder="enter your message"
              />
            </div>
            <button type="submit">submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact_us;
