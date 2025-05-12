const express = require('express');
const router = express.Router();
const db = require('../utils/database');

// GET all Q&A questions
router.get('/', (req, res) => {
  db.all('SELECT * FROM questions ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST a new question
router.post('/', (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const stmt = db.prepare('INSERT INTO questions (title, content, author) VALUES (?, ?, ?)');
  stmt.run([title, content, author], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

module.exports = router;