import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem('username');
    if (name) setUsername(name);

    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu')) setShowMenu(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    window.location.reload(); // refresh UI
  };

  

  return (
    <div className="navbar">
      <div className="logo">GameVerse</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Game</Link>
        <Link to="/community" className="nav-link">Community</Link>
      </div>

      <div className="nav-right">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-btn">search</button>

        {username ? (
          <div className="user-menu" onClick={() => {
                  console.log("clicked avatar");
                  setShowMenu(!showMenu);
                }}>
            <img
              src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${username}`}
              alt="avatar"
              className="avatar-img"
            />
            <span className="username">{username}</span>
            {showMenu && (
              <div className="centered-dropdown">
                <h2 className="dropdown-title">👤 {username}</h2>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
      
        ) : (
          <div className="user-icon">👤</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;