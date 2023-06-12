import React from 'react';
import "./Our_Services.css";
import Digital_Marketing from "../../digital Marketing.png";
import WebDevelopment from "../../web development.png";
import MobileAppDevelopment from "../../Mobile App Development.png"

function Our_Services() {
  return (
    <div className='our1' >
        <div className='our2'>
            <h3 className='our'>Our Services</h3>
            <hr className='line'></hr>
        </div>
        <div className='services_cards'>
          <div className='container'>
          <div className="card-group">
          <div className="card" id="card1">
  <img src={Digital_Marketing} className='logos' alt="..." />
  <div className="card-body">
    <h5 className="card-title" id="card-heading">Digital Marketing</h5>
    <p className="card-text" id="card-para">Businesses can increase profitability by using data, analytics, and optimization strategies. With the help of our experts, we are turning the process into action and insights into engagement to achieve your business goals.</p>
  </div>
          </div>
          {/* -- */}
          <div className="card" id="card1">
  <img src={WebDevelopment}  className='logos' alt="..." />
  <div className="card-body">
    <h5 className="card-title" id="card-heading">Website Development</h5>
    <p className="card-text" id="card-para">We create highly optimized websites for better visibility, enhance brand awareness, improve conversions, and maximize revenues to accelerate your business growth. Establish your online presence to strengthen your brand's identity and increase audience engagement.</p>
  </div>
          </div>
          {/* -- */}
          <div className="card" id="card2">
  <img src={MobileAppDevelopment} className='logos'  alt="..." />
  <div className="card-body">
    <h5 className="card-title" id="card-heading">Mobile App Development</h5>
    <p className="card-text" id="card-para">With the advancement of technology, having a mobile application pushes your business to the edge. Our company has the expertise and experience to develop custom applications tailored to your demands, assuring platform compatibility and cost-effectiveness while enabling businesses to reach their ideal audience successfully.</p>
  </div>
          </div>
          {/* -- */}
          </div>
          </div>
    </div>
    <div className='book-demo-butn'>
    <button className='bookdemo'>Book A Demo</button>
    </div>
    </div>
  )
}

export default Our_Services