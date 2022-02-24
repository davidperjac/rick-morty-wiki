import { Switch } from '../Switch/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';

export const Header = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: 'linear 0.5s',
	};

	return (
		<div className="header">
			<h1 style={darkStyle}>Rick and Morty Wiki</h1>
			<Switch />
		</div>
	);
};
