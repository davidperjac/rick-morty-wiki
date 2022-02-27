import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/context';
import { Character } from '../Character/Character';
import { SelectContext } from '../../context/context';
import './Locations.scss';

import { useData } from '../../hooks/useData';
import { Select } from '../Select/Select';

export const Locations = () => {
	const [residents, setResidents] = useState([]);

	const locationCtx = useContext(SelectContext);
	const id = locationCtx.state.location;

	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const [location] = useData('https://rickandmortyapi.com/api/location/' + id);

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
		display: 'flex',
		flexDirection: 'column',
	};

	const darkInfo = {
		border: `2px solid  ${darkMode ? '#2eb086' : '#313552'}`,
		boxShadow: darkMode ? '10px 0px #2eb086' : '10px 0px #313552',
	};

	const changeLocation = (event) => {
		locationCtx.dispatch({
			type: 'CHANGE_LOCATION',
			payload: event.target.value,
		});
	};

	return (
		<div className="location" style={darkStyles}>
			<div className="info" style={darkInfo}>
				<h1>{location.name}</h1>
				<h2>{location.type}</h2>
				<h3>{location.dimension}</h3>
				<Select
					change={changeLocation}
					data={location}
					id={id}
					name="Location"
					total={126}
				/>
			</div>
			<div className="characters">
				{residents.map((resident, idx) => {
					return <Character key={idx} character={resident} />;
				})}
			</div>
		</div>
	);
};
