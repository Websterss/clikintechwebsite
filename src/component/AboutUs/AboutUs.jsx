import React from 'react'
import './AboutUs.css'
import image from '../../res/AboutUsImages/Image1.png'

function AboutUs() {
  return (
    <div class="div-ab">
    <div className='div3-ab'></div>
      <div class="div2-ab">
         <p class="heading-ab">About Us</p>
         <br></br>
         <p class="text-ab">Clikin Tech is a Digital Marketing Agency 
         that help businesses grow while establishing credibility with clients.
         </p>
         <button class="btn1-ab"><p class="btext-ab">Get Started</p></button>
      </div>
      <img src={image} alt="imagehere" class="imag-ab"/>   
    </div>
  )
}

export default AboutUs