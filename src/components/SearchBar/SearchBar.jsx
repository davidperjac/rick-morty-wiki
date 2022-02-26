import { useContext, useRef, useCallback } from 'react';
import './SearchBar.scss';
import {
	ThemeContext,
	FilterContext,
	SelectContext,
} from '../../context/context';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
	const filterCtx = useContext(FilterContext);
	const pageCtx = useContext(SelectContext);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const searchInput = useRef(null);

	const darkStyles = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const darkIcon = {
		color: darkMode ? '#2eb086' : '#313552',
	};

	const handleChange = useCallback(() => {
		filterCtx.dispatch({ type: 'FILTER', payload: searchInput.current.value });
		pageCtx.dispatch({ type: 'CHANGE_PAGE', payload: 1 });
	}, [filterCtx, pageCtx]);

	return (
		<div className="search-bar">
			<BsSearch className="icon" style={darkIcon} />
			<input
				className="filter"
				spellCheck="false"
				placeholder=" Search for characters..."
				style={darkStyles}
				onChange={handleChange}
				ref={searchInput}
			></input>
		</div>
	);
};
