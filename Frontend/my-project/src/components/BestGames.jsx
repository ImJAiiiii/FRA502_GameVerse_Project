import React, { useRef } from 'react';
import '../styles/BestGames.css';

const BestGames = ({ bestGames }) => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <div className="best-games-section">
      <div className="best-game-header">
        <h2 className="best-game-title">Best Seller Games</h2>

        {/* ปุ่ม scroll ซ้ายขวา */}
        <div className="scroll-buttons">
          <button className="scroll-btn-left" onClick={scrollLeft}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
            </svg>
          </button>
          <button className="scroll-btn" onClick={scrollRight}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="best-games-list" ref={scrollRef}>
        {bestGames.map((game, index) => (
          <div key={index} className="best-game-card">
            <div className="image-wrapper">
              <img src={game.image} alt={game.name} className="game-img" />
              <div className="best-game-gradient"></div>

              <div className="game-info">
                <div className="rank-and-name">
                  <p className="game-rank">{index + 1}</p>
                  <h3 className="game-name">{game.name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestGames;
