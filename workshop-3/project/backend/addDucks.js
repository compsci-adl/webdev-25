const sqlite3 = require('sqlite3').verbose();

// Open the database file
const db = new sqlite3.Database('ducks.db');

db.serialize(() => {
  // Insert sample data
  const insert = db.prepare(`INSERT INTO ducks (name, species, age, image) VALUES (?, ?, ?, ?)`);

  insert.run(['Daffy', 'Mallard', 4, 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg']);
  insert.run(['Donald', 'Pekin', 5, 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Amerikanische_Pekingenten_2013_01%2C_cropped.jpg']);
  insert.run(['Daisy', 'Pekin', 3, 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Amerikanische_Pekingenten_2013_01%2C_cropped.jpg']);

  insert.finalize();

  // Fetch and display all ducks
  console.log('\nAll Ducks:');
  db.each(`SELECT * FROM ducks`, (err, row) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`${row.id}. Name: ${row.name}, Species: ${row.species}, Age: ${row.age}, Image: ${row.image}`);
    }
  });
});

db.close();
