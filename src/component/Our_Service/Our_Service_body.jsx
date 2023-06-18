import React from "react";
import "./Our_Service_body.css";
import image from "../../res/Our_Service_Images/choose_us.png";

function Our_Service_body() {
    return (
        <div className="choose-us-body">
            <div className="choose-us-header">
                <h1>Why Choose Us</h1>
                <div className="bottom-line"></div>
                <p>At Clikin Tech, we place your business goals at the forefront of our priorities. We take immense pride in taking the burden of tasks, enabling you to concentrate on what truly matters - attaining remarkable success.</p>
            </div>
            <div className="choose-us-container flex">
                <div className="choose-us-left">
                    <ol>
                        <li>
                            <h3>Provide solutions that delivers</h3>
                            <p>No more click baits or empty promises! We offer practical solutions that genuinely work and align with your business objectives.</p>
                        </li>
                        <li>
                            <h3>Complacency is not in our vocabulary</h3>
                            <p>We are not passive bystanders to the latest insights. We continually seek to enhance our approach and adapt our strategies to seamlessly integrate into every business we come across.</p>
                        </li>
                        <li>
                            <h3>Responsibility and excellence are in the cards</h3>
                            <p>We are more than just a team of experts; we also embrace a strong sense of responsibility and accountability when facing challenges.</p>
                        </li>
                    </ol>
                </div>

                <div className="choose-us-right">
                    <img src={image} alt="Hero-Image" />
                </div>
            </div>
        </div>
    )
}

export default Our_Service_body;