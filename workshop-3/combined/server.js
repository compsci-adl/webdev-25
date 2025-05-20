const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Ensure JSON body parsing middleware is registered before routes
app.use(express.json());

// Connect to the SQLite database
const db = new sqlite3.Database('ducks.db');

// GET /ducks – Fetch all ducks
app.get('/ducks', (req, res) => {
  db.all('SELECT * FROM ducks', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST /ducks – Add a new duck
app.post('/ducks', (req, res) => {
    const { name, species, age } = req.body || {};
    if (!name) {
        return res.status(400).json({ error: 'Missing duck name' });
    }
    if (!species) {
        return res.status(400).json({ error: 'Missing duck species' });
    }
    if (age == null) {
        return res.status(400).json({ error: 'Missing duck age' });
    }

  const stmt = db.prepare('INSERT INTO ducks (name, species, age) VALUES (?, ?, ?)');
  stmt.run([name, species, age], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Duck added', id: this.lastID });
  });
  stmt.finalize();
});

// DELETE /ducks/:id – Delete a duck by ID
app.delete('/ducks/:id', (req, res) => {
  const duckId = req.params.id;

  db.run('DELETE FROM ducks WHERE id = ?', duckId, function (err) {
    if (err) return res.status(500).json({ error: err.message });

    if (this.changes === 0) {
    return res.status(404).json({ message: `Duck with id ${duckId} not found` });
    }

    res.json({ message: 'Duck deleted successfully', id: duckId });
  });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
