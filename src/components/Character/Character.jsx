import './Character.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';

export const Character = ({ character }) => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		border: darkMode ? '2px solid #2eb086' : '2px solid #313552',
		boxShadow: darkMode ? '10px 0px #2eb086' : '10px 0px #313552',
		transition: '0.3s linear',
		color: darkMode ? 'white' : 'black',
	};

	const darkTitle = {
		fontSize: '20px',
	};

	const statusStyle = {
		backgroundColor:
			character.status === 'Alive'
				? '#2eb086'
				: character.status === 'unknown'
				? '#313552'
				: '#b8405e',
		color: 'white',
	};

	const genderStyle = {
		backgroundColor:
			character.gender === 'Male'
				? '#313552'
				: character.gender === 'Unknown'
				? '#313552'
				: '#D82148',
		color: 'white',
	};

	const idStyle = {
		backgroundColor: darkMode ? 'white' : '#313552',
		color: darkMode ? 'black' : 'white',
		transition: '0.5s linear',
	};

	return (
		<div className="card" style={darkStyle}>
			<div className="id" style={idStyle}>
				{character.id}
			</div>
			<div className="gender" style={genderStyle}>
				{character.gender}
			</div>
			<div className="status" style={statusStyle}>
				{character.status}
			</div>
			<img
				src={character.image}
				alt={character.id}
				style={{
					borderRadius: '8px 8px 0 0',
					border: '1.5px 1.5px 0 0 solid #313552',
				}}
				draggable="false"
			></img>
			<h2 className="text" style={darkTitle}>
				{character.name}
			</h2>
			<span>{character.species}</span>
			<span>Last known location: {character.location.name}</span>
		</div>
	);
};
