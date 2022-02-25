import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/context';
import { Character } from '../Character/Character';
import { FilterContext, LocationContext } from '../../context/context';

import { useData } from '../../hooks/useData';

export const Locations = () => {
	const locationCtx = useContext(LocationContext);
	const id = locationCtx.state.value;
	const [location] = useData('https://rickandmortyapi.com/api/location/' + id);

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [residents, setResidents] = useState([]);

	const filterCtx = useContext(FilterContext);
	const filter = filterCtx.state.value;

	useEffect(() => {
		if (location) {
			(async function () {
				let a = await Promise.all(
					location.residents.map((x) => {
						return fetch(x).then((res) => res.json());
					})
				);
				setResidents(a);
			})();
		}
	}, [location]);

	const filteredArray = residents.filter((resident) => {
		return resident.name.toLowerCase().includes(filter.toLowerCase());
	});

	const darkStyles = {
		color: darkMode ? '#eee6ce' : '#313552',
		transition: '0.5s linear',
	};

	const darkSelect = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		color: darkMode ? '#2eb086' : '#313552',
	};

	const changeLocation = (event) => {
		locationCtx.dispatch({ type: 'CHANGE', payload: event.target.value });
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
				{filteredArray.length === 0 && (
					<h2 style={{ color: '#b8405e' }}>No results for {filter} </h2>
				)}
				{filteredArray.map((resident, idx) => {
					return <Character key={idx} character={resident} />;
				})}
			</div>
		</div>
	);
};
