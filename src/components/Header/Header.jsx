import { Switch } from '../Switch/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: 'linear 0.5s',
		cursor: 'pointer',
	};

	const linkStyle = {
		textDecoration: 'none',
	};

	return (
		<div className="header">
			<Link to="/" style={linkStyle}>
				<h1 style={darkStyle}>Rick & Morty Wiki</h1>
			</Link>
			<Link to="/episodes" style={linkStyle}>
				<h2 style={darkStyle}>Episodes</h2>
			</Link>
			<Link to="/locations" style={linkStyle}>
				<h2 style={darkStyle}>Locations</h2>
			</Link>
			<Switch />
		</div>
	);
};
