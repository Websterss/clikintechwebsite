import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../../res/HomeImages/1.png';
import image2 from '../../../res/HomeImages/2.png';
import image3 from '../../../res/HomeImages/3.png';
import image4 from '../../../res/HomeImages/4.png';
import image5 from '../../../res/HomeImages/5.png';
import image6 from '../../../res/HomeImages/6.png';
import image7 from '../../../res/HomeImages/7.png';
import image8 from '../../../res/HomeImages/8.png';
import './tech.css';

const Tech = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-angle-left"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <i className="fas fa-angle-right"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="logo-carousel">
      <h2 className="carousel-heading">Technologies That We Use</h2>
      <div className="carousel-underline"></div>
      <Slider {...settings}>
        <div>
          <img className="logo" src={image1} alt="Logo 1" />
        </div>
        <div>
          <img className="logo" src={image2} alt="Logo 2" />
        </div>
        <div>
          <img className="logo" src={image3} alt="Logo 3" />
        </div>
        <div>
          <img className="logo" src={image4} alt="Logo 4" />
        </div>
        <div>
          <img className="logo" src={image5} alt="Logo 5" />
        </div>
        <div>
          <img className="logo" src={image6} alt="Logo 6" />
        </div>
        <div>
          <img className="logo" src={image7} alt="Logo 7" />
        </div>
        <div>
          <img className="logo" src={image8} alt="Logo 8" />
        </div>
      </Slider>
    </div>
  );
};

export default Tech;
