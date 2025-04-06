export default function Pagination({ currentPage, totalPages, onPageChange }) {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
			<button
				onClick={() => {
					onPageChange(currentPage - 1);
				}}
				disabled={currentPage === 1}
			>
				⬅️
			</button>
			<div>
				Page {currentPage} of {totalPages}
			</div>
			<button
				onClick={() => {
					onPageChange(currentPage + 1);
				}}
				disabled={currentPage === totalPages}
			>
				➡️
			</button>
		</div>
	);
}
