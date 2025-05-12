import React from 'react';
import { useLocation } from 'react-router-dom';  // ใช้ useLocation เพื่อดึงข้อมูลจาก state
import MarkdownIt from 'markdown-it';
import '../styles/ReviewDetail.css';

const md = new MarkdownIt();

const ReviewDetail = () => {
  const { state } = useLocation();  // ดึงข้อมูลจาก state
  const { game } = state || {};  // รับข้อมูลเกมจาก state

  if (!game) {
    return <div style={{ padding: '2rem', color: 'white' }}>Loading review...</div>;
  }

  return (
    <div className="review-page">
      <div className="review-container">
        {/* ฝั่งซ้าย (Sidebar) */}
        <div className="review-sidebar">
          <img src={game.image_url} alt={game.name} className="review-image" />
          <div className="review-info">
            <h1 className="review-name">{game.name}</h1>

            {/* แสดงหมวดหมู่ของเกม */}
            <div className="tag-list">
              {Array.isArray(game.genres) ? (
                game.genres.map((category, index) => (
                  <span key={index} className="tag">{category}</span>
                ))
              ) : (
                game.genres?.split(',').map((category, index) => (
                  <span key={index} className="tag">{category.trim()}</span>
                ))
              )}
            </div>

            {/* แสดง Player Support */}
            <div className="tag-list">
              {game.playerSupport && game.playerSupport.length > 0 ? (
                game.playerSupport.map((support, index) => (
                  <span key={index} className="tag">{support}</span>
                ))
              ) : (
                <span>No player support available</span>
              )}
            </div>

            <div className="developer-info">
              <span>Developer</span>
              <span className="review-studio">{game.developer}</span>
            </div>
            <div className="developer-info">
              <span>Release Date</span>
              <span className="review-release">{game.release_date}</span>
            </div>

            <div className="review-rating">
              {'★'.repeat(game.rating)}{'☆'.repeat(10 - game.rating)}
            </div>
          </div>
        </div>

        {/* ฝั่งขวา (เนื้อหา Review) */}
        <div className="review-content">
          <h1 className="review-title">GameVerse Review: {game.name}</h1>
          <div className="review-description">
            <p>{game.description}</p>
            <div
              className="review-markdown"
              dangerouslySetInnerHTML={{ __html: md.render(game.review_content || '') }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;