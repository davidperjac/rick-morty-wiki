import './Episodes.scss';

import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/context';
import { Character } from '../Character/Character';
import { SelectContext } from '../../context/context';

import { useData } from '../../hooks/useData';
import { Select } from '../Select/Select';
import { useCharacters } from '../../hooks/useCharacters';

export const Episodes = () => {
	const [characters, setCharacters] = useState([]);

	const episodesCtx = useContext(SelectContext);
	const id = episodesCtx.state.episode;

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const [episode] = useData('https://rickandmortyapi.com/api/episode/' + id);

	useCharacters(episode, setCharacters);

	const darkStyles = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: '0.5s linear',
		margin: '6rem',
	};

	const darkInfo = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		boxShadow: darkMode ? '10px 0px #2eb086' : '10px 0px #313552',
	};

	const changeEpisode = (event) => {
		episodesCtx.dispatch({
			type: 'CHANGE_EPISODE',
			payload: event.target.value,
		});
	};

	return (
		<div className="episode" style={darkStyles}>
			<div className="info" style={darkInfo}>
				<h1>{episode.name}</h1>
				<h2>{episode.air_date}</h2>
				<h3>{episode.episode}</h3>
				<Select
					change={changeEpisode}
					data={episode}
					id={id}
					name="Episode"
					total={51}
				/>
			</div>
			<div className="characters">
				{characters.map((character, idx) => {
					return <Character key={idx} character={character} />;
				})}
			</div>
		</div>
	);
};
