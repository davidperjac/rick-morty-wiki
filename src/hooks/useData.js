import { useEffect, useState, useContext } from 'react';
import { SelectContext, FilterContext, InfoContext } from '../context/context';

export function useData(url) {
	const [data, setData] = useState([]);

	const pageCtx = useContext(SelectContext);
	const page = pageCtx.state.page;

	const filterCtx = useContext(FilterContext);
	const filter = filterCtx.state.value;

	const infoCtx = useContext(InfoContext);

	const setInfo = (data) => {
		infoCtx.dispatch({ type: 'CHANGE_COUNT', payload: data.count });
		infoCtx.dispatch({ type: 'CHANGE_PAGES', payload: data.pages });
	};

	useEffect(
		// eslint-disable-next-line react-hooks/exhaustive-deps
		async function fetchData() {
			let response = await fetch(`${url}?page=${page}&name=${filter}`);
			let info = await response.json();
			if (info.results) {
				setInfo(info.info);
				setData(info.results);
			} else {
				setData(info);
			}
			window.scrollTo({ behavior: 'smooth', top: '0px' });
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[url, page, filter]
	);
	return [data];
}
