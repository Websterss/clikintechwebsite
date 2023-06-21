import React from 'react';
import './Welcome.css'
import image from '../../../res/HomeImages/Image1.png'

function Welcome(){
    
    return(
    <div className='div1'> 
    <div className='div2'>
    <div className='div3'>
    <img src={image} alt="imagehere" className="img-fluid imgc"/>   
    </div>
    <div className="divc">
    <p className='title '>We Help  Businesses
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
    <button  className="btnc">Get Started</button>           
    </div>
    </div>
    </div> 
    );
}

export default Welcome;