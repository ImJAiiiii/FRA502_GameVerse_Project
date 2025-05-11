import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Community.css';

const GuideCard = ({ guide }) => {
  const navigate = useNavigate();

  const truncateDescription = (desc, length = 150) => {
    if (desc.length > length) {
      return desc.substring(0, length) + '...';
    }
    return desc;
  };

  return (
    <div className="guide-card"
      onClick={() => navigate('/guide-detail', { state: { guide } })}
    >
      <img src={guide.image} alt={guide.title} className="guide-img" />
      <div className="guide-info">
        <h3 className="guide-title-com">{guide.title}</h3>
        <p className="guide-description">{truncateDescription(guide.description)}</p>
        <div className="guide-rating">
          {'★'.repeat(Math.round(guide.rating))}{'☆'.repeat(5 - Math.round(guide.rating))}
          <span className="guide-votes">{guide.votes} ratings</span>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
