// src/pages/CategoryReviewPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GameCard from '../components/GameCard';

const CategoryReviewPage = () => {
  const { categoryName } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/reviews/category/${categoryName}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
    <div className="category-page">
      <h1>Reviews in: {categoryName}</h1>
      <div className="review-grid">
        {reviews.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default CategoryReviewPage;
