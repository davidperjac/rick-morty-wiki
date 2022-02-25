import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../context/context';

export function useData(url) {
	const [data, setData] = useState([]);

	const pageCtx = useContext(PageContext);
	const page = pageCtx.state.value;

	useEffect(
		// eslint-disable-next-line react-hooks/exhaustive-deps
		async function fetchData() {
			let response = await fetch(`${url}?page=${page}`);
			let info = await response.json();
			if (info.results) {
				setData(info.results);
			} else {
				setData(info);
			}
			window.scrollTo({ behavior: 'smooth', top: '0px' });
		},
		[url, page]
	);

	return [data];
}
