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
    <div className='div1 div3'> 
    <img src={image} alt="imagehere" className="imgc"/>   
    <div className="divc">
    <p className='title'>We Help  Businesses
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
    for world-class brands. We provide digital 
    solutions that helps your business scale digitally 
    in the competitive markets.
    </p>
   
    <button className="btnc" onClick={navigate}>Get Started</button>
    
    </div>
    </div> 
    );
}

export default Welcome;