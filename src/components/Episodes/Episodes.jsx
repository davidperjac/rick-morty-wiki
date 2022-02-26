import './Episodes.scss';

import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/context';
import { Character } from '../Character/Character';
import { SelectContext } from '../../context/context';
import { CharacterLoading } from '../Characters/CharacterLoading';

import { useData } from '../../hooks/useData';

export const Episodes = () => {
	const [characters, setCharacters] = useState([]);

	const episodesCtx = useContext(SelectContext);
	const id = episodesCtx.state.episode;

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const [episode, loading] = useData(
		'https://rickandmortyapi.com/api/episode/' + id
	);

	const loadingArray = new Array(20).fill().map((_, idx) => idx + 1);

	useEffect(() => {
		(async function () {
			if (episode.characters) {
				let a = await Promise.all(
					episode.characters.map(async (x) => {
						return fetch(x).then((res) => res.json());
					})
				);
				setCharacters(a);
			}
		})();
	}, [episode]);

	const darkStyles = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: '0.5s linear',
		margin: '6rem',
	};

	const darkSelect = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const changeEpisode = (event) => {
		episodesCtx.dispatch({
			type: 'CHANGE_EPISODE',
			payload: event.target.value,
		});
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
				{loading
					? loadingArray.map((idx) => {
							return <CharacterLoading />;
					  })
					: characters.map((character, idx) => {
							return <Character key={idx} character={character} />;
					  })}
			</div>
		</div>
	);
};
