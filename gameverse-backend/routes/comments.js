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
  const { name, content } = req.body; // รับ name จาก body ด้วย

  if (!name || !content) {
    return res.status(400).json({ error: 'Name and content are required.' });
  }

  const stmt = db.prepare(
    'INSERT INTO comments (review_id, name, content) VALUES (?, ?, ?)'
  );
  stmt.run([reviewId, name, content], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID });
  });
});


module.exports = router;
