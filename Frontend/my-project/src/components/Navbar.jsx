import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">GameVerse</div>
      <div className="nav-links">
        <a href="#">Game</a>
        <a href="#">Community</a>
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
