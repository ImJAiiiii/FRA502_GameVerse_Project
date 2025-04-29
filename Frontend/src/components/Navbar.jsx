import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">GameVerse</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Game</Link>
        <Link to="/community" className="nav-link">Community</Link>
      </div>
      <div className="nav-right">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-btn"> s</button>
        <div className="user-icon">👤</div>
      </div>
    </div>
  );
};

export default Navbar;
