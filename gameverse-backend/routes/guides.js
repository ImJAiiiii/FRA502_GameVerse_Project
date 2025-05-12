const express = require('express');
const router = express.Router();
const db = require('../utils/database');

// GET: ดึง guides พร้อม category
router.get('/', (req, res) => {
  const guideQuery = `
    SELECT g.*, GROUP_CONCAT(gc.category) as categories
    FROM guides g
    LEFT JOIN guide_categories gc ON g.id = gc.guide_id
    GROUP BY g.id
    ORDER BY g.created_at DESC
  `;

  db.all(guideQuery, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const guides = rows.map(row => ({
      ...row,
      categories: row.categories ? row.categories.split(',') : []
    }));

    res.json(guides);
  });
});

// POST: เพิ่ม guide พร้อม category
router.post('/', (req, res) => {
  const { title, content, image_url, language, author, categories } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Missing title, content, or author.' });
  }

  const insert = db.prepare(
    'INSERT INTO guides (title, content, image_url, language, author) VALUES (?, ?, ?, ?, ?)'
  );

  insert.run([title, content, image_url || '', language || '', author], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    const guideId = this.lastID;

    if (Array.isArray(categories)) {
      const stmt = db.prepare('INSERT INTO guide_categories (guide_id, category) VALUES (?, ?)');
      categories.forEach(cat => stmt.run([guideId, cat]));
      stmt.finalize();
    }

    res.status(201).json({ id: guideId });
  });

  insert.finalize();
});

module.exports = router;