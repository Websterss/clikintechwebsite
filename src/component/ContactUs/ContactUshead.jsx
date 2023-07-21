import React from 'react';
import './ContactUshead.css'; // Import CSS file
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../res/ContactUsImages/contacthead.png';

const ContactUshead = () => {
  return (
    // <div className="custom-container">
    //   <div className="custom-heading">
    //     <h6 className='text2'>Contact us</h6>
    //     <h1 className='text1'>We’re here for you</h1>
    //   </div>
    //   <div className="custom-image">
    //     <img src={image} alt="Image" className="image-size" />
    //   </div>
    // </div>
    <div className="app-container-c">
    {/* Large Screens */}
    <div className="d-none d-lg-block container-lg">
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="text1">Contact us</h1>
            <h1 className="heading-lg">We’re here for you</h1>
          </Col>
          <Col md={4}>
            <img src={image} alt="Image" className="image-size" />
          </Col>
        </Row>
      </Container>
    </div>

{/* Small Screens */}
<div className="d-lg-none container-fluid smc">
<div className='img-back-c'></div>
<div className="container bbc">
  <div className="row rc">
    <div className="col cc">
      <img src={image} alt="Image" className="present-image-c" />
    </div>
  </div>
  <div>
    <h3 className='heading-sm-d'>Contact Us</h3>
    <h1 className='heading-sm-c'>We’re here for you</h1>
  </div>
</div>
</div>

  </div>
  );
};

export default ContactUshead;
