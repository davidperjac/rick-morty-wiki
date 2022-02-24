import { useContext } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { Character } from '../Character/Character';
import { FilterContext } from '../../context/context';
import './Characters.scss';

export const Characters = () => {
	const [characters, loading] = useCharacters();

	const filterCtx = useContext(FilterContext);
	const filter = filterCtx.state.value;

	const filteredArray = characters.filter((character) => {
		return character.name.toLowerCase().includes(filter.toLowerCase());
	});

	return (
		<>
			<div className="characters">
				{filteredArray.map((character, idx) => {
					return (
						<Character key={idx} character={character} loading={loading} />
					);
				})}
			</div>
			{filteredArray.length === 0 && loading && (
				<h1 style={{ color: 'red' }}>No results for {filter} :(</h1>
			)}
		</>
	);
};
