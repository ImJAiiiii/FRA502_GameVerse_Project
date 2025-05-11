const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  const query = `
    SELECT games.id, games.name, games.developer, games.release_date, games.price,
           genres.name as genre_name
    FROM games
    LEFT JOIN game_genres ON games.id = game_genres.game_id
    LEFT JOIN genres ON genres.id = game_genres.genre_id
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const grouped = {};
    rows.forEach(row => {
      if (!grouped[row.id]) {
        grouped[row.id] = {
          id: row.id,
          name: row.name,
          developer: row.developer,
          release_date: row.release_date,
          price: row.price,
          genres: []
        };
      }
      if (row.genre_name) grouped[row.id].genres.push(row.genre_name);
    });

    res.json(Object.values(grouped));
  });
});

module.exports = router;