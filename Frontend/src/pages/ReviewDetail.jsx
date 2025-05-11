import React from 'react';
import { useParams } from 'react-router-dom';
import dummyReviews from '../data/dummyReviews';
import '../styles/ReviewDetail.css';

const ReviewDetail = () => {
  const { id } = useParams();

  // [BACKEND]: fetch จาก API เช่น /api/reviews/:id
  // const [game, setGame] = useState(null);
  // useEffect(() => {
  //   fetch(`/api/reviews/${id}`)
  //     .then(res => res.json())
  //     .then(data => setGame(data));
  // }, [id]);
  const game = dummyReviews.find(g => g.id === parseInt(id));

  if (!game) {
    return <div style={{ padding: '2rem', color: 'white' }}>Game not found.</div>;
  }

  return (
    <div className="review-page">
        <div className="review-container">
            {/* ฝั่งซ้าย (Sidebar) */}
            <div className="review-sidebar">
            <img src={game.image} alt={game.name} className="review-image" />
            <div className="review-info">
                <h1 className="review-name">{game.name}</h1>

                {/* [BACKEND]: แยก genre เป็น array จาก backend */}
                <div className="tag-list">
                {game.genre.split(',').map((tag, index) => (
                    <span key={index} className="tag">{tag.trim()}</span>
                ))}
                </div>
                <div className="developer-info">
                <span>Developer</span>
                <span className="review-studio">{game.studio}</span>
                </div>
                <div className="developer-info">
                <span>Release Date</span>
                <span className="review-release">{game.releaseDate}</span>
                </div>
                <p className="review-price">{game.price}</p>
                <div className="review-rating">
                {'★'.repeat(game.rating)}{'☆'.repeat(5 - game.rating)}
                </div>
            </div>
            </div>

            {/* ฝั่งขวา (เนื้อหา Review) */}
            <div className="review-content">
            <h1 className="review-title">GameVerse Review: {game.name}</h1>
            <a className="review-link" href="https://visualgamer.com/r-e-p-o-survival-horror-game-multiplayer-pc-steam/">รีวิวโดย VisualGamer</a>
            <div className="review-description">
                <p>{game.description}</p>
                <h2>เนื้อเรื่องเกม</h2>
                <p>{game.description2}</p>
                {/* [BACKEND]: สามารถรองรับ content เป็น markdown/HTML */}
            </div>
            </div>
        </div>
        </div>

  );
};

export default ReviewDetail;
