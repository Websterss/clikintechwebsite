import "./Blog.css";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image from "../../../res/Our_Service_Images/Blog.png";
import React from 'react';

const Blog = () => {
    return (
        <div>
            <section id="blog">
                <div className="blog-heading">
                    <h3 className="blog-h3">Our Blog</h3>
                    <div className="underline"></div>
                </div>

                {/* Blog Container */}
                <div className="container blog-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col ">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
      <a href="#" className="blog-title"><h5 className="card-title">The Ultimate Guide To SEO Success In 2023</h5></a>
      <p className="card-text">Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.</p>
                            <a href="#" className="btn1">Explore more</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
      <a href="#" className="blog-title"><h5 className="card-title">The Ultimate Guide To SEO Success In 2023</h5></a>
      <p className="card-text">Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.</p>
                            <a href="#" className="btn1">Explore more</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
      <a href="#" className="blog-title"><h5 className="card-title">The Ultimate Guide To SEO Success In 2023</h5></a>
      <p className="card-text">Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.</p>
                            <a href="#" className="btn1">Explore more</a>
      </div>
    </div>
  </div>
</div>
                </div>
            </section>
        </div>
    )
}


export default Blog;


