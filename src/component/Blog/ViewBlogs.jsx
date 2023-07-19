import React, { useState, useEffect } from 'react';
import likeimage from '../../res/blogimages/like.png';
import shareimage from '../../res/blogimages/share.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from "axios";
import './ViewBlogs.css';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../../res/blogimages/ourblog.png';
import "./BlogSearch.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewBlogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [isLoading, setISLodaing]  = useState(true);

  const cardsPerPage = 9;


  useEffect(() => {
    axios
      .get("https://clikintechwebsite.onrender.com/api/get")
      .then(res => {setCardData(res.data.blog)
        setISLodaing(false)
      })
      .catch(err => console.error(err));
},[setCardData]);

console.log(cardData);




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

  const handleShareImageClick = (url, id) => {
    const urlToCopy = `${url}/${id}`;
    navigator.clipboard.writeText(urlToCopy).then(
      () => {
        // Show success toast notification
        toast.success('URL copied to clipboard!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
      (err) => {
        // Show error toast notification
        toast.error('Failed to copy URL to clipboard!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  };

  return (
    <div>
      <SkeletonTheme highlightColor='#050921'>
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
        <img src={image1}  className="present-image" alt={image1} />
      </div>
    </div>
    <div className="row r">
      <div className="col text-center">
        <h1 className="heading-sm">Read Top Articles</h1>
        <div className="search-bar-sm">
          <input type="text" className="form-control rounded-0" onChange={(e) => setSearchTitle(e.target.value)}  placeholder="Search Articles" />
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
                <Link to={`/Blog/${card._id}`} className="btn btn-secondary">
                Explore more<i className="fas fa-angle-right"></i>
              </Link>
                <FormControlLabel
                className="custom-label-container" 
                  control={<Checkbox
                    icon={<FavoriteBorder style={{ fontSize: 25 }} />}
                      checkedIcon={<Favorite style={{ fontSize: 25 }} />} 
                    name="checkedH"
                    classes={{ checked: "MuiIconButton-root Mui-checked MuiSvgIcon-root" }}
                  />
                  }
                />
                {/* <img src={likeimage} className={`like-card ${likedCards[card._id] ? 'liked' : ''}`} onClick={() => toggleLike(card._id)} alt="Card" /> */}
                {/* <img src={shareimage} className="share-card" alt="Card" /> */}
              <img
                src={shareimage}
                className="share-card"
                alt="Card"
                onClick={() => handleShareImageClick(window.location.href, card._id)}
              />
              <ToastContainer />
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
