import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import '../styles/GuideDetailPage.css';
import axios from 'axios';

const mdParser = new MarkdownIt();

const GuideDetailPage = () => {
  const location = useLocation();
  const guide = location.state?.guide;
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (guide?.id) {
      axios
        .get(`http://localhost:3001/reviews/${guide.id}/comments`)
        .then((res) => setComments(res.data))
        .catch((err) => console.error('Error fetching comments:', err));
    }
  }, [guide?.id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const username = localStorage.getItem('username') || 'Anonymous';
      
      const response = await axios.post(`http://localhost:3001/reviews/${guide.id}/comments`, {
        name: username,
        content: commentText,
      });
  
      const newComment = {
        id: response.data.id,
        name: username,
        content: commentText,
        created_at: new Date().toISOString(),
      };
  
      setComments((prev) => [newComment, ...prev]);
      setCommentText('');
    } catch (err) {
      console.error('Failed to submit comment:', err);
    }
  };
  
  

  if (!guide)
    return <div style={{ color: 'white', padding: '2rem' }}>No guide data found.</div>;

  return (
    <div className="guide-detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1 className="guide-title">{guide.title}</h1>
      <p className="guide-author">by {guide.author || "Unknown Author"}</p>
      <img src={guide.image} alt={guide.title} className="guide-detail-image" />
      <p className="guide-detail-description">{guide.description}</p>
      <hr />
      <div
        className="guide-detail-content"
        dangerouslySetInnerHTML={{ __html: mdParser.render(guide.content) }}
      />

      {/* 💬 Comment Section */}
      <div className="comment-section">
        <h2>Comments</h2>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            placeholder="add your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Comment</button>
        </form>

        <div className="comment-list">
          {comments.map((c, idx) => (
            <div key={idx} className="comment-item">
              <strong style={{ color: '#AD49E1' }}>{c.name}</strong>{' '}
              <span style={{ fontSize: '0.8rem', color: '#aaa' }}>
                {new Date(c.created_at).toLocaleString()}
              </span>
              <p style={{ color: '#e0e0e0' }}>{c.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideDetailPage;
