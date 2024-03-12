// src/components/RatingStars.jsx
import React from 'react';

const RatingStars = ({ rating }) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 !== 0 ? 1 : 0;
  const emptyStar = 5 - fullStar; // Assuming a scale of 0 to 5 for ratings

  return (
    <div>
      {'★'.repeat(fullStar)}
      {'☆'.repeat(emptyStar)}
      <span> {rating}</span>
    </div>
  );
};

export default RatingStars;