import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import '../styles/GuideDetailPage.css';

const mdParser = new MarkdownIt();

const GuideDetailPage = () => {
  const location = useLocation();
  const guide = location.state?.guide;
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (guide?.id) {
      const stored = JSON.parse(localStorage.getItem(`comments-${guide.id}`) || '[]');
      setComments(stored);
    }
  }, [guide?.id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      comment: commentText,
      createdAt: new Date().toISOString()
    };
    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`comments-${guide.id}`, JSON.stringify(updatedComments));
    setName('');
    setCommentText('');
  };

  if (!guide) return <div style={{ color: 'white', padding: '2rem' }}>No guide data found.</div>;

  return (
    <div className="guide-detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="guide-title">{guide.title}</h1>
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
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Leave a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit Comment</button>
        </form>

        <div className="comment-list">
          {comments.map((c, idx) => (
            <div key={idx} className="comment-item">
              <strong>{c.name}</strong> <span>{new Date(c.createdAt).toLocaleString()}</span>
              <p>{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideDetailPage;
