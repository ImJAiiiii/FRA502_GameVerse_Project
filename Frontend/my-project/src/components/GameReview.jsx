import React, { useRef, useState } from 'react';
import GameCard from './GameCard';
import '../styles/GameReview.css';

const GameReview = ({ games }) => {
  const scrollRef = useRef(null);

  // สำหรับ Drag
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // คูณ 2 เพื่อความไว
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollLeftFunc = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  


  return (
    <div className="review-section">
      <div className="review-header">
        <h2 className="review-title">Game Review</h2>
        <a href="#" className="see-all">see all</a>
        <div className="scroll-buttons"></div>
          {/* ปุ่มเลื่อนซ้าย */}
          <button className="scroll-btn-left" onClick={scrollLeftFunc}>
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M15.41 7.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
            </svg>
          </button>

          {/* ปุ่มเลื่อนขวา */}
          <button className="scroll-btn" onClick={scrollRight}>
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
          </button>
      </div>

      <div className="game-list-wrapper">
        <div
          className="game-list"
          ref={scrollRef}
          onMouseDown={startDrag}
          onMouseMove={duringDrag}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onWheel={(e) => {
            e.preventDefault();
            scrollRef.current.scrollLeft += e.deltaY*3;
          }}
        >
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameReview;
