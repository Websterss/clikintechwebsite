import React from 'react'
import './AboutUs.css'
import image from './res/Image1.png'

function AboutUs() {
  return (
    <div class="div1">
    <div className='div3'></div>
      <div class="div2">
         <p class="heading">About Us</p>
         <br></br>
         <p class="text">Clikin Tech is a Digital Marketing Agency 
         that help businesses grow while establishing credibility with clients.
         </p>
         <button class="btn1"><p class="btext">Get Started</p></button>
      </div>
      <img src={image} alt="imagehere" class="imag"/>   
    </div>
  )
}

export default AboutUs