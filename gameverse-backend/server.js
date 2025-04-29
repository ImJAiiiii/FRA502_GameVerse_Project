const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const commentRoutes = require('./routes/comments');
const categoryRoutes = require('./routes/categories');
const genreRoutes = require('./routes/genres');
const gameRoutes = require('./routes/games');
require('./utils/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reviews', commentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/games', gameRoutes);

app.listen(port, () => {
  console.log(`GameVerse Back-end server running at http://localhost:${port}`);
});