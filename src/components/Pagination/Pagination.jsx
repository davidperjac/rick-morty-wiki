import './Pagination.scss';
import { useContext, useState } from 'react';
import { PageContext } from '../../context/context';

export const Pagination = ({ pageLimit, dataLimit }) => {
	const page = useContext(PageContext);
	const [pages] = useState(Math.round(826 / dataLimit));
	const [currentPage, setCurrentPage] = useState(page.state.value);
	const width = window.innerWidth;

	function goToNextPage() {
		page.dispatch({ type: 'NEXT' });
		setCurrentPage((page) => page + 1);
	}

	function goToPreviousPage() {
		page.dispatch({ type: 'PREV' });
		setCurrentPage((page) => page - 1);
	}

	function changePage(event) {
		const pageNumber = Number(event.target.textContent);
		page.dispatch({ type: 'CHANGE', payload: pageNumber });
		setCurrentPage(pageNumber);
	}

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		if (start === 40) {
			return new Array(2).fill().map((_, idx) => start + idx + 1);
		}
		return new Array(width > 768 ? pageLimit : 4)
			.fill()
			.map((_, idx) => start + idx + 1);
	};

	return (
		<div className="pagination">
			<button
				onClick={goToPreviousPage}
				className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
			>
				prev
			</button>
			{getPaginationGroup().map((item, index) => (
				<button
					key={index}
					onClick={changePage}
					className={`paginationItem 
          ${currentPage === item ? 'active' : null} `}
				>
					<span>{item}</span>
				</button>
			))}
			<button
				onClick={goToNextPage}
				className={`next ${currentPage === pages + 1 ? 'disabled' : ''}`}
			>
				next
			</button>
		</div>
	);
};
