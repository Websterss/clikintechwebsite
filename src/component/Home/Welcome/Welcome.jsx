import React from 'react';
import './Welcome.css'
import image from '../../../res/HomeImages/Image1.png'

function Welcome(){
    
    return(
    <div class='div1'> 
    <img src={image} alt="imagehere" class="imgc"/>   
    <div class="divc">
    <p class='title'>We Help  Businesses
    To Be Digitally Visible!</p>
    <hr class="hrline"></hr>
    <br></br>
    <p class='text'>
    Ensuring that your business thrives and stands
    out digitally via our technological solutions
    is our uttermost priority.
    <br></br>
    <br></br>
    We are a global and trusted software Organisation,
    for world-class brands. We provide digital 
    solutions that helps your business scale digitally 
    in the competitive markets.
    </p>
    <a href="/ContactUs">
    <button class="btnc">Get Started</button>
    </a>
    </div>
    </div> 
    );
}

export default Welcome;