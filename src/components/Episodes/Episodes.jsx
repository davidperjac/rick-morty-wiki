import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/context';
import { Character } from '../Character/Character';
import { FilterContext, EpisodeContext } from '../../context/context';

import { useData } from '../../hooks/useData';
import './Episodes.scss';

export const Episodes = () => {
	const episodesCtx = useContext(EpisodeContext);
	const id = episodesCtx.state.value;

	const [episode] = useData('https://rickandmortyapi.com/api/episode/' + id);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [characters, setCharacters] = useState([]);

	const filterCtx = useContext(FilterContext);
	const filter = filterCtx.state.value;

	useEffect(() => {
		if (episode) {
			(async function () {
				let a = await Promise.all(
					episode.characters.map((x) => {
						return fetch(x).then((res) => res.json());
					})
				);
				setCharacters(a);
			})();
		}
	}, [episode]);

	const filteredArray = characters.filter((character) => {
		return character.name.toLowerCase().includes(filter.toLowerCase());
	});

	const darkStyles = {
		color: darkMode ? '#eee6ce' : '#313552',
		transition: '0.5s linear',
	};

	const darkSelect = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const changeEpisode = (event) => {
		episodesCtx.dispatch({ type: 'CHANGE', payload: event.target.value });
	};

	return (
		<div className="episode" style={darkStyles}>
			<h1>{episode.name}</h1>
			<h2>{episode.air_date}</h2>
			<h3>{episode.episode}</h3>
			<select
				style={darkSelect}
				onChange={changeEpisode}
				className="form-select"
				id={episode.name}
				defaultValue={id}
			>
				<option value="1">Choose...</option>
				{[...Array(51).keys()].map((x, index) => {
					return (
						<option value={x + 1} key={index}>
							Episode - {x + 1}
						</option>
					);
				})}
			</select>
			<div className="characters">
				{filteredArray.length === 0 && (
					<h2 style={{ color: '#b8405e' }}>No results for {filter} </h2>
				)}
				{filteredArray.map((character, idx) => {
					return <Character key={idx} character={character} />;
				})}
			</div>
		</div>
	);
};
