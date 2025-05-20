const sqlite3 = require('sqlite3').verbose();

// Open the database file
const db = new sqlite3.Database('ducks.db');

db.serialize(() => {
  // Insert sample data
  const insert = db.prepare(`INSERT INTO ducks (name, species, age) VALUES (?, ?, ?)`);

  insert.run(['Daffy', 'Mallard', 4]);
  insert.run(['Donald', 'Pekin', 5]);
  insert.run(['Daisy', 'Pekin', 3]);

  insert.finalize();

  // Fetch and display all ducks
  console.log('\nAll Ducks:');
  db.each(`SELECT * FROM ducks`, (err, row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`${row.id}. ${row.name} (${row.species}) - Age ${row.age}`);
    }
  });
});

db.close();
