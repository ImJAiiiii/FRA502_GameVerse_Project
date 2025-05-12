import React, { useState, useEffect } from 'react';
import '../styles/SetUsernameModal.css';

export default function SetUsernameModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    const existing = localStorage.getItem('username');
    if (!existing) setShow(true);
  }, []);

  const handleSave = () => {
    if (name.trim()) {
      localStorage.setItem('username', name.trim());
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <div className="username-modal-backdrop">
      <div className="username-modal">
        <h2>Set Your Nickname Before You Start</h2>
        <input
          type="text"
          placeholder=" Enter your nickname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
