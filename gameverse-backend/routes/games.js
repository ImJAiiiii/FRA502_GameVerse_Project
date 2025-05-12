const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  const query = `
    SELECT g.*, GROUP_CONCAT(gg.genre_id) as genre_ids, GROUP_CONCAT(genres.name) as genres
    FROM games g
    LEFT JOIN game_genres gg ON g.id = gg.game_id
    LEFT JOIN genres ON genres.id = gg.genre_id
    GROUP BY g.id
  `;

  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const games = rows.map(row => ({
      ...row,
      genres: row.genres ? row.genres.split(',') : []
    }));

    res.json(games);
  });
});

router.post('/', (req, res) => {
  const { title, name, developer, release_date, price, image_url, rating, description, review_content, genre_ids } = req.body;

  if (!name || !developer || !release_date || !price || !Array.isArray(genre_ids)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const insert = db.prepare(`
    INSERT INTO games (title, name, developer, release_date, price, image_url, rating, description, review_content)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insert.run([title, name, developer, release_date, price, image_url, rating, description, review_content], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    const gameId = this.lastID;
    const stmt = db.prepare('INSERT INTO game_genres (game_id, genre_id) VALUES (?, ?)');
    genre_ids.forEach(id => stmt.run([gameId, id]));
    stmt.finalize();

    res.status(201).json({ id: gameId });
  });

  insert.finalize();
});

module.exports = router;
