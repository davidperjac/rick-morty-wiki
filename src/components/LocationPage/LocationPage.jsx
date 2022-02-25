import React from 'react';
import { Locations } from '../Locations/Locations';
import { Pagination } from '../Pagination/Pagination';

export const LocationPage = () => {
	return (
		<>
			<Locations />
			<Pagination pageLimit={10} dataLimit={20} />
		</>
	);
};
