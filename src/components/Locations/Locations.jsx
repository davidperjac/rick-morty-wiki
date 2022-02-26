import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/context';
import { Character } from '../Character/Character';
import { SelectContext } from '../../context/context';
import { CharacterLoading } from '../Characters/CharacterLoading';

import { useData } from '../../hooks/useData';

export const Locations = () => {
	const [residents, setResidents] = useState([]);

	const locationCtx = useContext(SelectContext);
	const id = locationCtx.state.location;

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const [location, loading] = useData(
		'https://rickandmortyapi.com/api/location/' + id
	);

	const loadingArray = new Array(20).fill().map((_, idx) => idx + 1);

	useEffect(() => {
		(async function () {
			if (location.residents) {
				let a = await Promise.all(
					location.residents.map((x) => {
						return fetch(x).then((res) => res.json());
					})
				);
				setResidents(a);
			}
		})();
	}, [location]);

	const darkStyles = {
		color: darkMode ? '#2eb086' : '#313552',
		transition: '0.5s linear',
		margin: '6rem',
	};

	const darkSelect = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const changeLocation = (event) => {
		locationCtx.dispatch({
			type: 'CHANGE_LOCATION',
			payload: event.target.value,
		});
	};

	return (
		<div className="location" style={darkStyles}>
			<h1>{location.name}</h1>
			<h2>{location.type}</h2>
			<h3>{location.dimension}</h3>
			<select
				style={darkSelect}
				onChange={changeLocation}
				className="form-select"
				id={location.name}
				defaultValue={id}
			>
				<option value="1">Choose...</option>
				{[...Array(126).keys()].map((x, index) => {
					return (
						<option value={x + 1} key={index}>
							Location - {x + 1}
						</option>
					);
				})}
			</select>
			<div className="characters">
				{!loading
					? loadingArray.map((idx) => {
							return <CharacterLoading />;
					  })
					: residents.map((resident, idx) => {
							return <Character key={idx} character={resident} />;
					  })}
			</div>
		</div>
	);
};
