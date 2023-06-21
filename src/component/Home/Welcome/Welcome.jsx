import React from 'react';
import './Welcome.css'
import image from '../../../res/HomeImages/Image1.png'
import { useHistory } from "react-router-dom";


function Welcome(){
    const history = useHistory();
  
    const navigate = () => {
        history.push("/ContactUs")
    }
    return(
    <div class='div1'> 
  <div>
    <img src={image} alt="imagehere" class="imgc"/> 
    </div> 
    <div class="divc">
    <p class='title'>We Help  Businesses
    To Be Digitally Visible!</p>
    <hr className="hrline"></hr>
    <br></br>
    <p className='text'>
    Ensuring that your business thrives and stands
    out digitally via our technological solutions
    is our uttermost priority.
    <br></br>
    <br></br>
    We are a global and trusted software Organisation,
    for world-className brands. We provide digital 
    solutions that helps your business scale digitally 
    in the competitive markets.
    </p>
    <button className="btnc" onClick={navigate}>Get Started</button>
    </div>
    </div> 
    );
}

export default Welcome;