import React from 'react';
import './Welcome2.css'
import image from './res/Image2.png'
import image2 from './res/Image3.png'
import image3 from './res/Image4.png'

function Welcome2(){
    
    return(
    <div class='div1a'> 
        <div class="divca">
            <p class='titlea'>Boost Your Business With<br></br>
            Clikin Tech</p>
            <hr class="hrlinea"></hr>
            <p class='texta'>
            We deliver high quality products on time to make<br></br>
            your business profitable.
            </p>
            <div class="image-description">
                <div class="image-column">
                    <img src={image2} alt="Object 1"/>
                </div>
                <div class="description-column">
                    <p><strong>Get Measurable<br></br> ROI</strong><br></br>
                    Unlock the potential for
                    <br></br>exceptional returns on
                    <br></br>investing in our
                    <br></br>innovative solutions.
                    </p>
                </div>
                <div class="image-column">
                    <img src={image3} alt="Object 2"/>
                </div>
                <div class="description-column">
                    <p><strong>Strategy Driven<br></br> Promotion</strong>
                    <br></br>Experience strategic promotion 
                    <br></br>that drives analytical results 
                    <br></br>and will propel your business 
                    <br></br>forward.
                    </p>
                </div>
            </div>
        </div>
        <img src={image} alt="imagehere" class="img1"/>  
    </div> 
    
    );
}

export default Welcome2;