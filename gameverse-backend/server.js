const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const commentRoutes = require('./routes/comments');
const categoryRoutes = require('./routes/categories');
const genreRoutes = require('./routes/genres');
const gameRoutes = require('./routes/games');
const guideRoutes = require('./routes/guides');
const qaRoutes = require('./routes/questions');
const reviewsRouter = require('./routes/reviews');

require('./utils/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/guides', guideRoutes);
app.use('/api/questions', qaRoutes);
app.use('/api/reviews', reviewsRouter);


app.listen(port, () => {
  console.log(`GameVerse Back-end server running at http://localhost:${port}`);
});