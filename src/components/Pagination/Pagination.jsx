import './Pagination.scss';
import { useContext } from 'react';
import { InfoContext, SelectContext } from '../../context/context';

//characters : 826

export const Pagination = ({ pageLimit }) => {
	const page = useContext(SelectContext);
	const currentPage = page.state.page;

	const infoCtx = useContext(InfoContext);
	const { pages } = infoCtx.state;

	const width = window.innerWidth;

	function goToNextPage() {
		page.dispatch({ type: 'NEXT_PAGE' });
	}

	function goToPreviousPage() {
		page.dispatch({ type: 'PREV_PAGE' });
	}

	function changePage(event) {
		const pageNumber = Number(event.target.textContent);
		page.dispatch({ type: 'CHANGE_PAGE', payload: pageNumber });
	}

	const getPaginationGroup = () => {
		let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
		const size =
			pages - start < 10 ? pages - start : width > 768 ? pageLimit : 4;
		return new Array(size).fill().map((_, idx) => start + idx + 1);
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
				className={`next ${currentPage === pages ? 'disabled' : ''}`}
			>
				next
			</button>
		</div>
	);
};
