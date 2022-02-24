import { useContext } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/context';

import './Switch.scss';

export const Switch = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		color: darkMode ? '#2eb086' : '#313552',
	};

	const handleClick = () => {
		theme.dispatch({ type: 'TOGGLE' });
	};

	return (
		<div onClick={handleClick} className="switch" style={darkStyle}>
			{!darkMode ? <FaSun /> : <MdDarkMode />}
		</div>
	);
};
