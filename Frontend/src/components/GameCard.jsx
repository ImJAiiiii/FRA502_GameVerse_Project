import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GameCard.css';

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  const rating = game.rating;
  const getStarColor = (percent) => {
    if (percent < 5) return '#ff4c4c'; // แดง
    if (percent < 8) return '#ffc107'; // เหลือง
    return '#19e68c'; // เขียว
  };

  const starColor = getStarColor(rating);

  return (
    <div
      className="game-card"
      onClick={() => navigate('/review-detail', { state: { game } })} // ส่งข้อมูล game ผ่าน state
    >
      <div className="image-wrapper">
        <img src={game.image_url} alt={game.name} className="game-img" />
        <div className="game-gradient"></div>

        <div className="game-info-overlay">
          {/* ⭐ ดาว SVG + เปลี่ยนสีตามคะแนน */}
          <div className="star-score">
            <svg viewBox="0 0 24 24" className="star-icon">
              <path
                d="M12 2.5C12.3 2.5 12.6 2.7 12.7 3l1.9 3.9c.1.2.3.3.5.3l4.3.6c.7.1 1 .9.5 1.4l-3.1 3c-.1.1-.2.4-.2.6l.7 4.3c.1.7-.6 1.2-1.2.9l-3.9-2c-.2-.1-.5-.1-.7 0l-3.9 2c-.6.3-1.3-.2-1.2-.9l.7-4.3c0-.2 0-.5-.2-.6l-3.1-3c-.5-.5-.2-1.3.5-1.4l4.3-.6c.2 0 .4-.1.5-.3l1.9-3.9c.1-.3.4-.5.7-.5z"
                fill={starColor}
              />
            </svg>
            <span className="star-score-number">{Math.round(rating)}</span>
          </div>

          {/* ชื่อเกมและสตูดิโอ */}
          <div className="text-info">
            <h3 className="game-title">{game.name}</h3>
            <p className="game-studio">{game.developer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;