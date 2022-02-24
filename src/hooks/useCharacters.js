import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../context/context';

export function useCharacters() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const pageCtx = useContext(PageContext);
	const page = pageCtx.state.value;

	// useEffect(() => {
	// 	fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setData(data.results));
	// 	setLoading(false);
	// 	window.scrollTo({ behavior: 'smooth', top: '0px' });
	// }, [page]);

	return [data, loading];
}
