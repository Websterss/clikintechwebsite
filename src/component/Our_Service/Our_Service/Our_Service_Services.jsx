import React from 'react';
import "./Our_Service_Services.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image1 from "../../res/Our_Service_Images/Digital_Marketing.png";
import image2 from "../../res/Our_Service_Images/Web_dev.png";
import image3 from "../../res/Our_Service_Images/Mobile_dev.png";
import { BiChevronRight } from "react-icons/bi";


function Our_Service_Services() {
    return (
        <div className="our-service-container">
            <div className="our-service-header-container">
                <h5>OUR SERVICE</h5>
                <div className="border-line"></div>
                <p>Maximize the business potential with our excellent services tailored to your needs</p>
            </div>
            <div className="service-container text-center flex">
                <div className="row">
                    <div className="col">
                        <div className="card" id="card3">
                            <img src={image1} alt="Digital Marketing Image" className="card-img" id="card-img1"  />
                            <div className="card-body">
                                <h5 className="card-title" id="card-title1">Digital Marketing</h5>
                                <p className="card-text">Businesses can increase profitability by using data, analytics, and optimization strategies. With the help of our experts, we are turning the process into action and insights into engagement to achieve your business goals.</p>
                            </div>
                            <a href="#" className="btn explore">Explore more<BiChevronRight /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="card3">
                            <img src={image2} alt="Web Development Image" className="card-img" id="card-img1" />
                            <div className="card-body">
                                <h5 className="card-title" id="card-title1">Website Development</h5>
                                <p className="card-text">We create highly optimized websites for better visibility, enhance brand awareness, improve conversions, and maximize revenues to accelerate your business growth. Establish your online presence to strengthen your brand's identity and increase audience engagement.</p>
                            </div>
                            <a href="#" className="btn explore">Explore more<BiChevronRight /></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" id="card3">
                            <img src={image3} alt="Mobile Development Image" className="card-img" id="card-img1"  />
                            <div className="card-body">
                                <h5 className="card-title" id="card-title1">Mobile App Development</h5>
                                <p className="card-text">With the advancement of technology, having a mobile application pushes your business to the edge. Our company has the expertise and experience to develop custom applications tailored to your demands, assuring platform compatibility and cost-effectiveness while enabling businesses to reach their ideal audience successfully.</p>
                            </div>
                            <a href="#" className="btn explore">Explore more<BiChevronRight /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_Service_Services;