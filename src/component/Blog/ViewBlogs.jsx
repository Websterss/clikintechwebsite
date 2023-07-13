import React, { useState, useEffect } from 'react';
import image from '../../res/blogimages/blog.png';
import likeimage from '../../res/blogimages/like.png';
import shareimage from '../../res/blogimages/share.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";
import './ViewBlogs.css';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../../res/blogimages/ourblog.png';
import "./BlogSearch.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ViewBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [isLoading, setISLodaing]  = useState(true);
  const cardsPerPage = 9;


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then(res => {setCardData(res.data.blog)
        setISLodaing(false)
      })
      .catch(err => console.error(err));
},[setCardData]);

console.log(cardData);


  // const cardData = [
  //   {
  //     title: 'The Ultimate Guide To SEO Success in 2023',
  //     text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
  //     image: image,
  //   },
  //   {
  //     title: 'Mastering Social Media Analytics: Measuring Success',
  //     text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
  //     image: image,
  //   },
  //   {
  //     title: 'Unleashing The Potential Of Data-Driven marketing',
  //     text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
  //     image: image,
  //   },
  //   {
  //     title: 'The Ultimate Guide To SEO Success in 2023',
  //     text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
  //     image: image,
  //   },
  //   {
  //     title: 'Mastering Social Media Analytics: Measuring Success',
  //     text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
  //     image: image,
  //   },
  //   {
  //     title: 'Unleashing The Potential Of Data-Driven marketing',
  //     text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
  //     image: image,
  //   },
  //   {
  //     title: 'The Ultimate Guide To SEO Success in 2023',
  //     text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
  //     image: image,
  //   },
  //   {
  //     title: 'Mastering Social Media Analytics: Measuring Success',
  //     text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
  //     image: image,
  //   },
  //   {
  //     title: 'Unleashing The Potential Of Data-Driven marketing',
  //     text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
  //     image: image,
  //   },
  //   {
  //     title: 'The Ultimate Guide To SEO Success in 2023',
  //     text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
  //     image: image,
  //   },
  // ];



  // Calculate the indexes of the cards to be displayed on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);


  // Function to handle page number click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers based on total cards and cards per page
  const pageNumbers = Math.ceil(cardData.length / cardsPerPage);

  // Function to handle "Next" button click
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <SkeletonTheme highlightColor='#C38787'>
      <div className="app-container">
      
      {/* Large Screens */}
      <div className="d-none d-lg-block container-lg">
        <Container>
          <Row>
            <Col md={8}>
              <h1 className="heading-lg">Read Top Articles</h1>
              <div className="search-bar-lg">
                <input type="text" className="form-control rounded-0" onChange={(e) => setSearchTitle(e.target.value)} placeholder="Search Articles" />
                <button className="btn btn-success rounded-0"><span>Search</span></button>
              </div>
            </Col>
            <Col md={4}>
              <img src={image1}  className="imgg-fluid" alt={image1} />
            </Col>
          </Row>
        </Container>
      </div>

{/* Small Screens */}
<div className="d-lg-none container-fluid sm">
  <div className='img-back'></div>
  <div className="container bb">
    <div className="row r">
      <div className="col c">
        <img src={image}  className="present-image" alt={image} />
      </div>
    </div>
    <div className="row r">
      <div className="col text-center">
        <h1 className="heading-sm">Read Top Articles</h1>
        <div className="search-bar-sm">
          <input type="text" className="form-control rounded-0" placeholder="Search Articles" />
          <button className="btn btn-success rounded-0"><span>Search</span></button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className="container-fluid container-max-width">
    
       {
        isLoading ? (
          <div className='row'>

          <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                  <div className="my-card">
                    <Skeleton  className="my-card-image" alt="Card" />
                    <div className="my-card-body">
                      <Skeleton  className="my-card-title"></Skeleton>
                      <Skeleton  className="my-card-text"></Skeleton>
                    </div>
                  </div>
                </div>
          
                <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                  <div className="my-card">
                    <Skeleton  className="my-card-image" alt="Card" />
                    <div className="my-card-body">
                      <Skeleton  className="my-card-title"></Skeleton>
                      <Skeleton  className="my-card-text"></Skeleton>
                    </div>
                  </div>
                </div>
          
                <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" >
                  <div className="my-card">
                    <Skeleton  className="my-card-image" alt="Card" />
                    <div className="my-card-body">
                      <Skeleton  className="my-card-title"></Skeleton>
                      <Skeleton  className="my-card-text"></Skeleton>
                    </div>
                  </div>
                </div>
                            
              </div>
        ) :(
          <div className="row">
 {currentCards.filter((card) => {
      if(searchTitle === ""){
        return card
      }else if(card.title.toLowerCase().includes(searchTitle.toLowerCase())){
           return card
      }
}).map((card) => (
          <div className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center" key={card.id}>
            <div className="my-card">
              <img src={card.image} className="my-card-image" alt="Card" />
              <div className="my-card-body">
                <h5 className="my-card-title">{card.title}</h5>
                <p className="my-card-text">{card.description}</p>
                <a href="#" className="btn btn-secondary"> Explore more<i className="fas fa-angle-right"></i></a>
                
                <img src={likeimage} className="like-card" alt="Card" />
                <img src={shareimage} className="share-card" alt="Card" />
              </div>
            </div>
          </div>
        ))}
              </div>
        )
       }

       
      {cardData.length > cardsPerPage && (
        <div className="row mt-3">
          <div className="col text-center">
            {currentPage > 1 && (
              <button
                className="btn btn-dark me-2 prev"
                onClick={handlePreviousClick}
              >
                <i className="fas fa-arrow-left left"></i><span>Previous
                </span></button>
            )}
            <div className="pagination">
              {Array.from({ length: pageNumbers }, (_, index) => (
                <button
                  key={index}
                  className={`btn btn-dark ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            {indexOfLastCard < cardData.length && (
              <button
                className="btn btn-dark nxt"
                onClick={handleNextClick}
              >
                <span>Next</span><i className="fas fa-arrow-right right"></i>
              </button>
            )}
          </div>
        </div>
      )}
     
    </div>
    </SkeletonTheme>
    </div>
  );
};


export default ViewBlogs;
