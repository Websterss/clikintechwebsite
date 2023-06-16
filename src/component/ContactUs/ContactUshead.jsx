import React from 'react';
import './ContactUshead.css'; // Import CSS file
import image from '../../res/ContactUsImages/contacthead.png';

const ContactUshead = () => {
  return (
    <div className="custom-container">
      <div className="custom-heading">
        <h6 className='text2'>Contact us</h6>
        <h1 className='text1'>We’re here for you</h1>
      </div>
      <div className="custom-image">
        <img src={image} alt="Image" className="image-size" />
      </div>
    </div>
  );
};

export default ContactUshead;
