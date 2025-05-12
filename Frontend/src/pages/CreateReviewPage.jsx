import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import '../styles/GuideCreatePage.css';
import axios from 'axios';

const mdParser = new MarkdownIt();

const PLAYER_SUPPORT_OPTIONS = [
  'Co-Operative', 'Local & Party', 'MMO',
  'Multiplayer', 'Online Competitive', 'Singleplayer'
];

const GENRE_OPTIONS = [
  'Action', 'Adventure', 'First-Person Shooter',
  'Farming & Crafting', 'Horror', 'Puzzle',
  'Simulation', 'Sports & Racing', 'Strategy'
];

const CreateReviewPage = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [game, setGame] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [playerSupport, setPlayerSupport] = useState([]);
  const [genres, setGenres] = useState([]);
  const [developer, setDeveloper] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  const savedData = localStorage.getItem('reviewFormData');  // ใช้ localStorage แทน sessionStorage
  if (savedData) {
    const parsed = JSON.parse(savedData);
    setTitle(parsed.title || '');
    setImage(parsed.image || '');
    setGame(parsed.game || '');
    setRating(parsed.rating || 0);
    setDescription(parsed.description || '');
    setContent(parsed.content || '');
    setPlayerSupport(parsed.playerSupport || []);
    setGenres(parsed.genres || []);
  }
}, []);


  const toggleCheckbox = (option, list, setList) => {
    if (list.includes(option)) {
      setList(list.filter((item) => item !== option));
    } else {
      setList([...list, option]);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const newReview = {
    title,
    name: game,
    developer,
    release_date: releaseDate,
    price: 0, // ถ้ายังไม่มีราคาก็ใส่ 0 ไปก่อน
    image_url: image,
    rating,
    description,
    review_content: content,
    playerSupport, // บันทึก playerSupport
    genres, // บันทึก genres
  };

  try {
    const newId = Date.now(); // หรือใช้เลข ID ที่สร้างขึ้นตามต้องการ
    localStorage.setItem(`review_${newId}`, JSON.stringify(newReview));  // ใช้ newId สำหรับบันทึกใน localStorage
    localStorage.setItem(`playerSupport_${newId}`, JSON.stringify(playerSupport));  // บันทึก playerSupport
    localStorage.setItem(`genres_${newId}`, JSON.stringify(genres));  // บันทึก genres
    navigate(`/review/${newId}`); // ไปยังหน้ารีวิวใหม่
  } catch (err) {
    console.error('Error creating review:', err);
  }
};

  return (
    <div className="guide-create-page">
      <h1>Create New Review</h1>
      <form onSubmit={handleSubmit}>
        <label>Review Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title for your review"
          required
        />

        <label>Game Name</label>
        <input
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
          placeholder="Enter the name of the game"
          required
        />

        <label>Branding Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Paste image URL (e.g., https://...)"
        />

        <label>Developer</label>
        <input
          type="text"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)}
          placeholder="Enter developer name"
        />

        <label>Release Date</label>
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />

        <label>Rating (1-10)</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />

        <label>Description</label>
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short summary of your review"
        ></textarea>

        {/* Player Support */}
        <h3 style={{ marginTop: '2rem' }}>Player Support</h3>
        <div className="checkbox-group">
          {PLAYER_SUPPORT_OPTIONS.map((option) => (
            <label key={option} className="checkbox-item">
              <input
                type="checkbox"
                checked={playerSupport.includes(option)}
                onChange={() => toggleCheckbox(option, playerSupport, setPlayerSupport)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Genres */}
        <h3 style={{ marginTop: '1.5rem' }}>Genres</h3>
        <div className="checkbox-group">
          {GENRE_OPTIONS.map((option) => (
            <label key={option} className="checkbox-item">
              <input
                type="checkbox"
                checked={genres.includes(option)}
                onChange={() => toggleCheckbox(option, genres, setGenres)}
              />
              {option}
            </label>
          ))}
        </div>

        <h2 style={{ marginTop: '2rem', color: '#fff' }}>Review Editor</h2>
        <MdEditor
          value={content}
          style={{ height: '400px', marginTop: '1rem' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setContent(text)}
        />

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button type="submit">Publish Review</button>
        </div>
      </form>
    </div>
  );
};

export default CreateReviewPage;
