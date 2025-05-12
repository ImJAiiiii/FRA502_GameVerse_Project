import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';
const Categories = () => {

    const playerSupport = ['Co-Operative', 'Local & Party', 'MMO', 'Multiplayer', 'Online Competitive', 'Singleplayer'];
    const genres = ['Action', 'Adventure', 'First-Person Shooter', 'Farming & Crafting', 'Horror', 'Puzzle', 'Simulation', 'Sports & Racing', 'Strategy'];

    return (
    <div className="categories-section">
        <h2 className="sub-header">Categories</h2>
        <div className="categories-content">
            
            {/* ฝั่งซ้าย: Player Support */}
            <div className="category-block">
                <h3 className="category-title">PLAYER SUPPORT</h3>
                <ul className="category-list">
                {playerSupport.map((item) => (
                    <li key={item}><Link to={`/category/${encodeURIComponent(item)}`}>{item}</Link></li>
                ))}
                </ul>
            </div>

            {/* เส้นคั่นกลาง */}
            <div className="vertical-divider"></div>

            {/* ฝั่งขวา: Genres */}
            <div className="category-block">
                <h3 className="category-title">GENRES</h3>
                <ul className="category-list">
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>First-Person Shooter</li>
                    <li>Farming & Crafting</li>
                    <li>Horror</li>
                    <li>Puzzle</li>
                    <li>Simulation</li>
                    <li>Sports & Racing</li>
                    <li>Strategy</li>

                </ul>
            </div>
            </div>
    </div>
    );
};

export default Categories;