import { useData } from '../../hooks/useData';
import { Character } from '../Character/Character';
import { useContext } from 'react';
import { InfoContext, ThemeContext } from '../../context/context';
import './Characters.scss';

export const Characters = () => {
	const infoCtx = useContext(InfoContext);
	const { count } = infoCtx.state;

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const [characters,loading] = useData('https://rickandmortyapi.com/api/character');

	console.log(loading);

	const darkStyle = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: '0.5s linear',
	};

	return (
		<>
			{!characters.error && (
				<h2 style={darkStyle}>Available: {count} characters </h2>
			)}
			<div className="characters">
				{characters.error ? (
					<h2 style={darkStyle}>No characters found</h2>
				) : (
					characters.map((character, idx) => {
						return <Character key={idx} character={character} />;
					})
				)}
			</div>
		</>
	);
};
