import { useContext } from 'react';
import { useData } from '../../hooks/useData';
import { Character } from '../Character/Character';
import { FilterContext } from '../../context/context';
import './Characters.scss';

export const Characters = () => {
	const [characters] = useData('https://rickandmortyapi.com/api/character');

	const filterCtx = useContext(FilterContext);
	const filter = filterCtx.state.value;

	const filteredArray = characters.filter((character) => {
		return character.name.toLowerCase().includes(filter.toLowerCase());
	});

	return (
		<>
			<div className="characters">
				{filteredArray.length === 0 && (
					<h2 style={{ color: '#b8405e' }}>No results for {filter}</h2>
				)}
				{filteredArray.map((character, idx) => {
					return <Character key={idx} character={character} />;
				})}
			</div>
		</>
	);
};
