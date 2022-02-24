import './Character.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';

export const Character = ({ character }) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		border: darkMode ? '2px solid #2eb086' : '2px solid #313552',
		boxShadow: !darkMode && '10px 10px #313552',
		transition: '0.3s linear',
		color: darkMode ? 'white' : 'black',
	};

	const darkTitle = {
		fontSize: '20px',
	};

	return (
		<div className="card" style={darkStyle}>
			<img
				src={character.image}
				alt={character.id}
				style={{ borderRadius: '8px 8px 0 0' }}
				draggable="false"
			></img>
			<h2 className="text" style={darkTitle}>
				{character.name}
			</h2>
			<span>
				{character.status} - {character.species}
			</span>
			<span>{character.gender}</span>
			<span>Last known location: {character.location.name}</span>
		</div>
	);
};
