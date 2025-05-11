const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM categories', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;


// routes/genres.js

const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM genres', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

module.exports = router;