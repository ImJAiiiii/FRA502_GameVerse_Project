import React from 'react';
import '../styles/Community.css';

const QABoard = () => {
  const questions = [
    { avatar: 'https://i.pravatar.cc/50?img=1', text: 'How to unlock the secret character?' },
    { avatar: 'https://i.pravatar.cc/50?img=2', text: 'Best strategy for level 10?' },
    { avatar: 'https://i.pravatar.cc/50?img=3', text: 'What is the max level cap?' },
    { avatar: 'https://i.pravatar.cc/50?img=4', text: 'Tips for boss fight?' }
  ];

  return (
    <div className="qa-grid">
      {questions.map((q, index) => (
        <div key={index} className="qa-card">
          <img src={q.avatar} alt="User Avatar" className="qa-avatar" />
          <p className="qa-text">{q.text}</p>
        </div>
      ))}
    </div>
  );
};

export default QABoard;
