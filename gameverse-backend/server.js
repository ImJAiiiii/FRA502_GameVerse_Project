const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const commentRoutes = require('./routes/comments');
require('./utils/database'); // แค่เรียกมาเพื่อสร้าง table

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/reviews', commentRoutes);

// Start server
app.listen(port, () => {
  console.log(`GameVerse Back-end server running at http://localhost:${port}`);
});
