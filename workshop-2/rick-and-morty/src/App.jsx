import { useEffect, useState } from 'react';
import CharacterCard from './components/character-card';
import CountingButton from './components/counting-button';
import Pagination from './components/pagination';

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		async function fetchCharacters() {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character/?page=${currentPage}`,
			);
			const data = await response.json();
			setTotalPages(data.info.pages);
			setCharacters(data.results);
		}
		fetchCharacters();
	}, [currentPage]);

	return (
		<>
			<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
				<CountingButton>Button</CountingButton>
				<CountingButton size="small">Smaller Button</CountingButton>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
					gap: '1rem',
					marginBlock: '1rem',
				}}
			>
				{characters.map((character) => (
					<CharacterCard
						key={character.id}
						name={character.name}
						image={character.image}
						dead={character.status === 'Dead'}
					/>
				))}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</>
	);
}

export default App;
