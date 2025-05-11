import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard';
import '../styles/Community.css';
import '../styles/Home.css';

const Community = () => {
  const [guides, setGuides] = useState([]);

  // Fetch guides from localStorage when the component mounts
  useEffect(() => {
    const storedGuides = JSON.parse(localStorage.getItem('communityGuides') || '[]');
    setGuides(storedGuides);
  }, []);

  // Handle deleting a guide
  const handleDelete = (indexToDelete) => {
    const updatedGuides = [...guides];
    updatedGuides.splice(indexToDelete, 1);
    setGuides(updatedGuides);
    localStorage.setItem('communityGuides', JSON.stringify(updatedGuides));
  };

  return (
    <div className="community-page">
      <h1 className="section-title">COMMUNITY</h1>

      <div className="guides-header">
        <h2>Guides</h2>
        <Link to="/create-guide" className="create-guide-btn">+ Create your own</Link>
      </div>

      <div className="guide-list">
        {guides.map((guide, index) => (
          <div key={index} className="guide-card-wrapper">
            <GuideCard guide={guide} />

            {/* Dropdown for delete */}
            <div className="dropdown">
              <button className="dropdown-toggle">⋮</button>
              <div className="dropdown-menu">
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
