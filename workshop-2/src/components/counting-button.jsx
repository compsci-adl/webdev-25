import { useState } from 'react';

export default function CountingButton({ children, size, onClick }) {
	const [count, setCount] = useState(0);

	return (
		<button
			style={{
				padding: size === 'small' ? '0.6rem' : '1rem',
				fontSize: size === 'small' ? '0.8rem' : '1rem',
				borderRadius: '0.5rem',
				border: 'none',
				cursor: 'pointer',
			}}
			onClick={() => {
				setCount((c) => c + 1);
				onClick();
			}}
		>
			{children} (Clicked: {count} times)
		</button>
	);
}
