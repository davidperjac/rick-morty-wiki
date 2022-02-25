import { useContext } from 'react';
import './SearchBar.scss';
import { ThemeContext, FilterContext } from '../../context/context';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
	const filterCtx = useContext(FilterContext);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyles = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const darkIcon = {
		color: darkMode ? '#2eb086' : '#313552',
	};

	const handleChange = (event) => {
		filterCtx.dispatch({ type: 'FILTER', payload: event.target.value });
	};

	return (
		<div className="search-bar">
			<BsSearch className="icon" style={darkIcon} />
			<input
				className="filter"
				spellCheck="false"
				placeholder=" Search for characters..."
				style={darkStyles}
				onChange={handleChange}
				value={filterCtx.state.value}
			></input>
		</div>
	);
};
