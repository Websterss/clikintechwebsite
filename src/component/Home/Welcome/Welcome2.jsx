import React from 'react';
import './Welcome2.css'
import image from '../../../res/HomeImages/Image2.png'
import image2 from '../../../res/HomeImages/Image3.png'
import image3 from '../../../res/HomeImages/Image4.png'

function Welcome2(){
    
    return(
    <div className='div1a'> 
    <div className='div2a'>
        <div className="divca">
            <p className='titlea'>Boost Your Business With<br></br>
            Clikin Tech</p>
            <hr className="hrlinea"></hr>
            <p className='texta'>
            We deliver high quality products on time to make<br></br>
            your business profitable.
            </p>
            <div className="image-description">
                <div className="image-column">
                    <img src={image2} alt="Object 1"/>
                </div>
                <div className="description-column">
                    <p><strong>Get Measurable<br></br> ROI</strong><br></br>
                    Unlock the potential for
                    <br></br>exceptional returns on
                    <br></br>investing in our
                    <br></br>innovative solutions.
                    </p>
                </div>
                <div className="image-column">
                    <img src={image3} alt="Object 2"/>
                </div>
                <div className="description-column">
                    <p><strong>Strategy Driven<br></br> Promotion</strong>
                    <br></br>Experience strategic promotion 
                    <br></br>that drives analytical results 
                    <br></br>and will propel your business 
                    <br></br>forward.
                    </p>
                </div>
            </div>
        </div>
        <div className='div3a'>
        <img src={image} alt="imagehere" className="img-fluid img1"/>  
        </div>
        </div>
    </div> 
    
    );
}

export default Welcome2;