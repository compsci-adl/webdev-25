import { useEffect, useState } from 'react';

function DuckList() {
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ducks')
      .then(res => res.json())
      .then(setDucks)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Ducks</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {ducks.map(duck => (
          <div key={duck.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <img
              src={duck.image}
              alt={duck.name}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3>{duck.name}</h3>
            <p>{duck.species}</p>
            <p>Age: {duck.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DuckList;