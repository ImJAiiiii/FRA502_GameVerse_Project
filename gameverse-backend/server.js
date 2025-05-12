const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const commentRoutes = require('./routes/comments');
const categoryRoutes = require('./routes/categories');
const genreRoutes = require('./routes/genres');
const gameRoutes = require('./routes/games');
const guideRoutes = require('./routes/guides');
const qaRoutes = require('./routes/questions');
require('./utils/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reviews', commentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/questions', qaRoutes);

app.listen(port, () => {
  console.log(`GameVerse Back-end server running at http://localhost:${port}`);
});


// routes/questions.js

const express = require('express');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
  db.all('SELECT * FROM questions ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

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

module.exports = router