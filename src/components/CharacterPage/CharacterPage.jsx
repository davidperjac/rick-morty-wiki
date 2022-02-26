import { Characters } from '../Characters/Characters';
import { Pagination } from '../Pagination/Pagination';
import { SearchBar } from '../SearchBar/SearchBar';

export const CharacterPage = () => {
	return (
		<>
			<SearchBar />
			<Characters />
			<Pagination pageLimit={10} />
		</>
	);
};
