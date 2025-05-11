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
        {/* [BACKEND]: เชื่อมกับระบบ search โดยส่ง keyword ไปยัง backend เพื่อค้นหาเกม / guide / review */}
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-btn"> search</button>

        {/* [BACKEND]: เชื่อมกับระบบผู้ใช้ เช่น JWT / session เพื่อตรวจสอบว่ามีการ login หรือไม่ */}
        {/* [BACKEND]: หากมี user login แล้ว ควรแสดงชื่อผู้ใช้ / dropdown menu แทนไอคอน 👤 */}
        <div className="user-icon">👤</div>
      </div>
    </div>
  );
};

export default Navbar;
