import React from 'react';

import { Characters } from '../Characters/Characters';

import { Pagination } from '../Pagination/Pagination';

export const CharacterPage = () => {
	return (
		<>
			<Characters />
			<Pagination pageLimit={10} dataLimit={20} />
		</>
	);
};
