import { useContext } from 'react';
import './Filter.scss';
import { ThemeContext, FilterContext } from '../../context/context';

export const Filter = () => {
	const filterCtx = useContext(FilterContext);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyles = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const handleChange = (event) => {
		filterCtx.dispatch({ type: 'FILTER', payload: event.target.value });
	};

	return (
		<input
			className="filter"
			spellCheck="false"
			placeholder="Search for characters..."
			style={darkStyles}
			onChange={handleChange}
			value={filterCtx.state.value}
		></input>
	);
};
