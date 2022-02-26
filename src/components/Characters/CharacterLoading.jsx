import { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import './CharacterLoading.scss';

export const CharacterLoading = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const darkStyle = {
		backgroundColor: darkMode ? '#2eb086' : '#313552',
		transition: '0.3s linear',
		color: 'white',
	};

	// const darkTitle = {
	// 	fontSize: '20px',
	// };

	// const statusStyle = {
	// 	backgroundColor:
	// 		character.status === 'Alive'
	// 			? '#2eb086'
	// 			: character.status === 'unknown'
	// 			? '#313552'
	// 			: '#b8405e',
	// 	color: 'white',
	// };

	// const genderStyle = {
	// 	backgroundColor:
	// 		character.gender === 'Male'
	// 			? '#313552'
	// 			: character.gender === 'Unknown'
	// 			? '#313552'
	// 			: '#D82148',
	// 	color: 'white',
	// };

	// const idStyle = {
	// 	backgroundColor: darkMode ? 'white' : '#313552',
	// 	color: darkMode ? 'black' : 'white',
	// 	transition: '0.5s linear',
	// };

	return (
		<div className="card-loading" style={darkStyle}>
			<h2>Loading...</h2>
		</div>
	);
};
