import "./Blog.css";

import React from 'react';

const Blog = () => {
    return (
        <div>
            <section id="blog">
                <div className="blog-heading">
                    {/* <span>My Recent Posts</span> */}
                    <h3>Our Blogs</h3>
                </div>

                {/* Blog Container */}
                <div className="blog-container">

                    {/* box */}
                    <div className="blog-box">
                        {/* img */}
                        <div className="blog-img">
                            <img src="https://picsum.photos/id/4/367/267" alt="image" />
                        </div>


                        {/* text */}
                        <div className="blog-text">
                            {/* <span>18 July 2023 / web design</span> */}
                            <a href="#" className="blog-title">The Ultimate Guide To SEO Success In 2023</a>
                            <p>Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.</p>
                            <button className="btn"><a href="#">Explore more </a></button>
                        </div>
                    </div>

                     {/* box */}
                     <div className="blog-box">
                        {/* img */}
                        <div className="blog-img">
                            <img src="https://picsum.photos/id/4/367/267" alt="image" />
                        </div>


                        {/* text */}
                        <div className="blog-text">
                            {/* <span>18 July 2023 / web design</span> */}
                            <a href="#" className="blog-title">Mastering Social Media Analytics:Measuring Success</a>
                            <p>Learn how to effectively measure and optimise your social media marketing strategies.</p>
                            <button className="btn"><a href="#">Explore more</a></button>
                        </div>
                    </div>

                     {/* box */}
                     <div className="blog-box">
                        {/* img */}
                        <div className="blog-img">
                            <img src="https://picsum.photos/id/4/367/267" alt="image" />
                        </div>


                        {/* text */}
                        <div className="blog-text">
                            {/* <span>18 July 2023 / web design</span> */}
                            <a href="#" className="blog-title">Unleashing The Potential of Data-Driven Marketing</a>
                            <p>Discover the strategies and tools to harness the power nof data to limitless possibilities of data-driven marketing.</p>
                            <button className="btn">Explore more</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Blog;