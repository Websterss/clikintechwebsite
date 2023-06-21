import React from 'react'
import './AboutUs.css'
import image from '../../res/AboutUsImages/Image1.png'
import image2 from '../../res/AboutUsImages/Image2.png'
import image3 from '../../res/AboutUsImages/Image3.png'
import image4 from '../../res/AboutUsImages/Image4.png'
import { useHistory } from "react-router-dom";

function AboutUs() {
  const history = useHistory();
  
    const navigate = () => {
        history.push("/ContactUs")
    }
  return (
    <>
    <div class="div-ab">
    <div className='div3-ab'></div>
      <div class="div2-ab">
         <p class="heading-ab">About Us</p>
         <br></br>
         <p class="text-ab">Clikin Tech is a Digital Marketing Agency 
         that help businesses grow while establishing credibility with clients.
         </p>
         <a href="/ContactUs">
         <button class="btn1-ab" onClick={navigate}><p class="btext-ab">Get Started</p></button>
         </a>
      </div>
      <img src={image} alt="imagehere" class="imag-ab"/>   
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className='div4-ab'>
      <p class="heading1-ab">Our Story
      <hr className='hr-ab'></hr>
      </p>
         <br></br>
         <p class="text1-ab">Marketing strategies have been 
         around for a long time, serving as a means for businesses to promote their products and services. Initially, we relied heavily on traditional marketing methods. But as technology advances, so do our marketing solutions and techniques. For companies looking to build a robust online presence, digital marketing is the perfect ingredient for success. With the widespread use of social media and other online platforms, digital strategies have gained significant momentum. 
         Clikin Tech is a newly established agency providing businesses with impactful digital marketing solutions. Our primary objective is to enhance your website traffic, increase sales, and boost your income. With a focus on maximizing the effectiveness of your digital marketing campaigns, we will collaborate closely with you, considering your budget and target audience, to effectively communicate your message. By staying up-to-date with the latest advancements in digital marketing, we will create successful local campaigns tailored to meet your specific goals.
         </p>
      <img src={image2} alt="imagehere" class="imag2-ab"/>      
    </div>
    <br></br>
    <div className='div5-ab'>
      <p class="heading2-ab">Our Mission
      <hr className='hr2-ab'></hr>
      </p>
         <br></br>
         <p class="text2-ab">Our mission is to be the trusted partner for businesses seeking powerful digital marketing solutions. With our unrivaled creativity and expertise in digital marketing, we are dedicated to transforming our client's dreams into reality. By leveraging cutting-edge digital strategies, and harnessing the power of a data-driven approach, we strive to deliver exceptional results.
          We are driven by a relentless pursuit of success and outcomes that surpass expectations. As a cohesive team, we foster an environment of support, inspiration, and continuous growth, valuing individuality and our unwavering commitment to every project as if they were our own.
         </p>
      <img src={image3} alt="imagehere" class="imag3-ab"/>      
    </div> 
    <div className='div6-ab'>
      <p class="heading3-ab">Our Vision
      <hr className='hr3-ab'></hr>
      </p>
         <br></br>
         <p class="text3-ab">We aspire to be recognized as the best, not only in the results we achieve but also in the integrity with which we operate. We want to set the standard for excellence in the digital world. We are dedicated to producing exceptional results that exceed expectations and staying true to what we advertise. Our goal is to establish a reputation for reliability, ensuring that our clients can trust us.
         </p>
      <img src={image4} alt="imagehere" class="imag4-ab"/>      
    </div>      
    </>
  )
}

export default AboutUs