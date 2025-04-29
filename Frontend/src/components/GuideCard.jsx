import React from 'react';
import '../styles/Community.css';

const GuideCard = ({ guide }) => {
  return (
    <div className="guide-card">
      <img src={guide.image} alt={guide.title} className="guide-img" />
      <div className="guide-info">
        <h3 className="guide-title">{guide.title}</h3>
        <p className="guide-description">{guide.description}</p>
        <div className="guide-rating">
          {'★'.repeat(Math.round(guide.rating))}{'☆'.repeat(5 - Math.round(guide.rating))}
          <span className="guide-votes">{guide.votes} ratings</span>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
