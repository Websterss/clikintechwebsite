import "./Blog.css";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image from "../../../res/Our_Service_Images/Blog.png";
import React from 'react';

const Blog = () => {
    return (
        <div>
            <section id="blog">
                <div className="blog-heading">
                    <h3>Our Blog</h3>
                    <div className="underline"></div>
                </div>

                {/* Blog Container */}
                <div className="blog-container">

                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={image} alt="image" />
                        </div>
                        <div className="blog-text">
                            <a href="#" className="blog-title"><h5>The Ultimate Guide To SEO Success In 2023</h5></a>
                            <p >Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.</p>
                            <a href="#" className="btn1">Explore more</a>
                        </div>
                    </div>

                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={image} alt="image" />
                        </div>
                        <div className="blog-text">
                            <a href="#" className="blog-title"><h5>Mastering Social Media Analytics:Measuring Success</h5></a>
                            <p >Learn how to effectively measure and optimise your social media marketing strategies.</p>
                            <a href="#" className="btn1">Explore more</a>
                        </div>
                    </div>

                    <div className="blog-box">
                        <div className="blog-img">
                            <img src={image} alt="image" />
                        </div>
                        <div className="blog-text">
                            <a href="#" className="blog-title"><h5>Unleashing The Potential of Data-Driven Marketing</h5></a>
                            <p>Discover the strategies and tools to harness the power nof data to limitless possibilities of data-driven marketing.</p>
                            <a href="#" className="btn1">Explore more </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default Blog;