const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM genres', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;