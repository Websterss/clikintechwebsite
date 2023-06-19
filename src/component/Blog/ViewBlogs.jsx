import React, { useState } from 'react';
import image from '../../res/blogimages/blog.png';
import likeimage from '../../res/blogimages/like.png';
import shareimage from '../../res/blogimages/share.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './ViewBlogs.css';

const ViewBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const cardData = [
    {
      title: 'The Ultimate Guide To SEO Success in 2023',
      text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
      image: image,
    },
    {
      title: 'Mastering Social Media Analytics: Measuring Success',
      text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
      image: image,
    },
    {
      title: 'Unleashing The Potential Of Data-Driven marketing',
      text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
      image: image,
    },
    {
      title: 'The Ultimate Guide To SEO Success in 2023',
      text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
      image: image,
    },
    {
      title: 'Mastering Social Media Analytics: Measuring Success',
      text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
      image: image,
    },
    {
      title: 'Unleashing The Potential Of Data-Driven marketing',
      text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
      image: image,
    },
    {
      title: 'The Ultimate Guide To SEO Success in 2023',
      text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
      image: image,
    },
    {
      title: 'Mastering Social Media Analytics: Measuring Success',
      text: 'Learn how to effectively measure and optimize your social media marketing strategies.',
      image: image,
    },
    {
      title: 'Unleashing The Potential Of Data-Driven marketing',
      text: 'Discover the strategies and tools to harness the power of data to limitness possibilities of data-driven marketing.',
      image: image,
    },
    {
      title: 'The Ultimate Guide To SEO Success in 2023',
      text: 'Stay ahead of the competition with SEO strategies which will improve your website ranking and organic traffic.',
      image: image,
    },
  ];

  // Calculate the indexes of the cards to be displayed on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle "Next" button click
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container-fluid container-max-width">
      <div className="row ">
        {currentCards.map((card) => (
          <div className="col-md-4 d-flex justify-content-center" key={card.id}>
            <div className="my-card">
              <img src={card.image} className="my-card-image" alt="Card" />
              <div className="my-card-body">
                <h5 className="my-card-title">{card.title}</h5>
                <p className="my-card-text">{card.text}</p>
                <a href="#" className="btn btn-secondary"> Explore more<i className="fas fa-angle-right"></i></a>
                
                <img src={likeimage} className="like-card" alt="Card" />
                <img src={shareimage} className="share-card" alt="Card" />
              </div>
            </div>
          </div>
        ))}
      </div>
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
  );
};


export default ViewBlogs;
