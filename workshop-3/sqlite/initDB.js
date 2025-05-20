const sqlite3 = require('sqlite3').verbose();

// Open or create the database file
const db = new sqlite3.Database('ducks.db');

// Create the ducks table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS ducks (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    age INTEGER
  )`);
  console.log("Ducks table created (if it didn’t already exist).");
});

// Close the database connection
db.close();
