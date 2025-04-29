import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/GuideCreatePage.css';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const categories = [
    'Achievements', 'Characters', 'Classes', 'Co-op', 'Crafting',
    'Game Modes', 'Gameplay Basics', 'Loot', 'Maps or Levels',
    'Modding or Configuration', 'Multiplayer', 'Secrets',
    'Story or Lore', 'Trading', 'Walkthroughs', 'Weapons', 'Workshop'
];

const GuideCreatePage = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [language, setLanguage] = useState('English');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [agree, setAgree] = useState(false);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const savedData = sessionStorage.getItem('guideFormData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setTitle(parsed.title || '');
      setImage(parsed.image || null);
      setLanguage(parsed.language || 'English');
      setDescription(parsed.description || '');
      setContent(parsed.content || '');
      setSelectedCategories(parsed.selectedCategories || []);
    }
  }, []);

  const handlePreview = () => {
    const formData = {
      title,
      image,
      language,
      description,
      content,
      selectedCategories,
    };
    sessionStorage.setItem('guideFormData', JSON.stringify(formData)); // บันทึก
    navigate('/guide-preview', { state: { content } }); // แล้วค่อย navigate
  };  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must confirm ownership to proceed.");
      return;
    }
    // Send data to backend or store locally
    console.log('Creating guide with:', selectedCategories);
  };

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="guide-create-page">
      <h1>Create New Guide</h1>
      <form onSubmit={handleSubmit}>
        <label>Guide Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title for your guide"
          required
        />

        <label>Branding Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label>Language</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option>English</option>
          <option>Thai</option>
          <option>Japanese</option>
        </select>

        <label>Description</label>
        <textarea
          rows="6"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your guide..."
        ></textarea>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', width: '100%', marginTop: '2rem' }}>
    {/* Markdown Editor ฝั่งซ้าย */}
    <div style={{ flex: '1 1 50%', minWidth: '400px' }}>
        <h2 style={{ color: '#fff' }}>Guide Editor</h2>
        <MdEditor
        value={content}
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={({ text }) => setContent(text)}
        />
    </div>

    {/* ปุ่ม Live Preview ฝั่งขวา */}
    <div style={{
        flex: '1 1 50%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        minWidth: '400px'
    }}>
    <button
    type="button"
    onClick={handlePreview}   // ✅ เรียกฟังก์ชัน handlePreview
    style={{
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
        borderRadius: '8px',
        backgroundColor: '#7A1CAC',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
    }}
    >
    Live Preview
    </button>
    </div>
    </div>



        <label>Categories</label>
        <div className="category-checkboxes">
        {categories.map((cat, idx) => (
            <label key={idx} className="checkbox-item">
            <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
            />
            {cat}
            </label>
        ))}
        </div>


        <label className="checkbox-item">
        <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
        />
        I am the original creator of this guide, or I have legal authorization to post this.
        </label>


        <button type="submit">Publish Guide</button>
      </form>
    </div>
  );
};

export default GuideCreatePage;
