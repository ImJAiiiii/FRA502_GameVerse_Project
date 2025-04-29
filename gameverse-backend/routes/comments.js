const express = require('express');
const router = express.Router();
const db = require('../utils/database');

// GET comments for a review
router.get('/:id/comments', (req, res) => {
  const reviewId = req.params.id;
  db.all('SELECT * FROM comments WHERE review_id = ? ORDER BY created_at ASC', [reviewId], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST new comment
router.post('/:id/comments', (req, res) => {
  const reviewId = req.params.id;
  const { name, content } = req.body;

  if (!name || !content) {
    res.status(400).json({ error: 'Name and content are required.' });
    return;
  }

  const stmt = db.prepare('INSERT INTO comments (review_id, name, content) VALUES (?, ?, ?)');
  stmt.run([reviewId, name, content], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID });
  });
  stmt.finalize();
});

module.exports = router;
