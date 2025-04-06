export default function CharacterCard({ name, image, dead }) {
	return (
		<div
			style={{
				border: '1px solid lightgray',
				padding: '1rem',
				borderRadius: '0.5rem',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<h2>{name}</h2>
				<h3>{dead && '💀'}</h3>
			</div>
			<img src={image} alt={name} />
		</div>
	);
}
