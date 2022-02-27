import { useEffect } from 'react';

export function useCharacters(data, setData) {
	useEffect(() => {
		(async function () {
			let a = await Promise.all(
				data.characters
					? data.characters.map(async (x) => {
							return fetch(x).then((res) => res.json());
					  })
					: data.residents.map(async (x) => {
							return fetch(x).then((res) => res.json());
					  })
			);
			setData(a);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
}
