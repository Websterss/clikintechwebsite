import "./Blog.css";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Blog = () => {

    const [ran, setRan] = useState([]);
    const [isLoading, setISLodaing]  = useState(true);



    useEffect(() => {
      axios.get(`https://clikintechwebsite.onrender.com/api/get/home`)
      .then((res) => {setRan(res.data)
        setISLodaing(false)
      })
      .catch(err => console.error(err));
    },[setRan])

    console.log(ran)

    return (
        <div>
          <SkeletonTheme highlightColor="#050921">
            <section id="blog">
                <div className="blog-heading">
                    <h3 className="blog-h3">Our Blog</h3>
                    <div className="underline"></div>
                </div>

                {/* Blog Container */}
                <div>
                  {
                    isLoading ? (
                      <div className='row'>

                      <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                        <div className="sk-my-card">
                          <Skeleton  className="sk-my-card-image" alt="Card" />
                          <div className="sk-my-card-body">
                            <Skeleton  className="sk-my-card-title"></Skeleton>
                            <Skeleton  className="sk-my-card-text"></Skeleton>
                          </div>
                        </div>
                      </div>
      
                      <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                        <div className="sk-my-card">
                          <Skeleton  className="sk-my-card-image" alt="Card" />
                          <div className="sk-my-card-body">
                            <Skeleton  className="sk-my-card-title"></Skeleton>
                            <Skeleton  className="sk-my-card-text"></Skeleton>
                          </div>
                        </div>
                      </div>
      
                      <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                        <div className="sk-my-card">
                          <Skeleton  className="sk-my-card-image" alt="Card" />
                          <div className="sk-my-card-body">
                            <Skeleton  className="sk-my-card-title"></Skeleton>
                            <Skeleton  className="sk-my-card-text"></Skeleton>
                          </div>
                        </div>
                      </div>
                        
          </div>
                    ) :(
                      <div className="row">
                      {
                        ran.map((card)=> (
                          <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={card._id}>
                          <div className="my-card">
                            <img src={card.image} className="my-card-image" alt="Card" />
                            <div className="my-card-body">
                              <h5 className="my-card-title">{card.title}</h5>
                              <p className="my-card-text">{card.description}</p>
                              <a href="#" className="btn1">Explore more</a>
                            </div>
                          </div>
                        </div>
                        ))
                      }
    
    
                    </div>
                    )
                  }
                </div>

            </section>
            </SkeletonTheme>
        </div>
    )
}


export default Blog;





{/* <div className="col">
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
</div> */}