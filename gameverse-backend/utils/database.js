const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../gameverse.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');

    db.run(`CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      review_id INTEGER,
      name TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS genres (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      developer TEXT,
      release_date TEXT,
      price REAL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS game_genres (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      game_id INTEGER,
      genre_id INTEGER,
      FOREIGN KEY (game_id) REFERENCES games(id),
      FOREIGN KEY (genre_id) REFERENCES genres(id)
    )`);

    db.serialize(() => {
      db.run(`INSERT OR IGNORE INTO categories (id, name) VALUES
        (1, 'PLAYER SUPPORT'),
        (2, 'GENRES')`);

      db.run(`INSERT OR IGNORE INTO genres (id, name, category_id) VALUES 
        (1, 'Co-Operative', 1),
        (2, 'Local & Party', 1),
        (3, 'MMO', 1),
        (4, 'Multiplayer', 1),
        (5, 'Online Competitive', 1),
        (6, 'Singleplayer', 1),
        (7, 'Action', 2),
        (8, 'Adventure', 2),
        (9, 'First-Person Shooter', 2),
        (10, 'Farming & Crafting', 2),
        (11, 'Horror', 2),
        (12, 'Puzzle', 2),
        (13, 'Simulation', 2),
        (14, 'Sports & Racing', 2),
        (15, 'Strategy', 2),
        (16, 'Comedy', 2)
      `);

      db.run(`INSERT OR IGNORE INTO games (id, name, developer, release_date, price) VALUES
        (1, 'R.E.P.O', 'semiwork', '2025-02-26', 220.00)`);

      db.run(`INSERT OR IGNORE INTO game_genres (game_id, genre_id) VALUES
        (1, 11),
        (1, 1),
        (1, 16),
        (1, 4)
      `);
    });
  }
});

module.exports = db;