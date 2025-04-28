import React from 'react';
import '../styles/Categories.css';
const Categories = () => {
    return (
    <div className="categories-section">
        <h2 className="category-header">Categories</h2>
        <div className="categories-content">
            
            {/* ฝั่งซ้าย: Player Support */}
            <div className="category-block">
                <h3 className="category-title">PLAYER SUPPORT</h3>
                <ul className="category-list">
                    <li>Co-Operative</li>
                    <li>LAN</li>
                    <li>Local & Party</li>
                    <li>MMO</li>
                    <li>Multiplayer</li>
                    <li>Online Competitive</li>
                    <li>Singleplayer</li>
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