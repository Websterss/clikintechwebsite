// Import the "view.css" file with the new class names
import './View_blog.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [cardData, setCardData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('https://clikintechwebsite.onrender.com/api/get')
      .then((res) => {
        setCardData(res.data.blog);
      })
      .catch((err) => console.error(err));
  }, [setCardData]);

  const cardDetails = cardData.find((card) => card._id === id);

  return (
    <div className="center-align"> {/* Use the center-align class */}
      {cardDetails && (
        <div>
          <img className="adjust-image" src={cardDetails.image} alt="Card" /> {/* Use the adjust-image class */}
          <h1 className="custom-h1">{cardDetails.title}</h1> {/* Use the custom-h1 class */}
          <p className="custom-p">{cardDetails.description}</p> {/* Use the custom-p class */}
        </div>
      )}
    </div>
  );
};

export default View;
