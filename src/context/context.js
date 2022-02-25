import { createContext, useReducer } from 'react';

import { pageReducer, filterReducer, themeReducer } from './reducers';
import {
	INITIAL_FILTER,
	INITIAL_PAGE,
	INITIAL_THEME,
	INITIAL_EPISODE,
	INITIAL_LOCATION,
} from './states';

export const ThemeContext = createContext();
export const FilterContext = createContext();
export const PageContext = createContext();
export const EpisodeContext = createContext();
export const LocationContext = createContext();

export const LocationProvider = (props) => {
	const [state, dispatch] = useReducer(pageReducer, INITIAL_LOCATION);
	return (
		<LocationContext.Provider value={{ state, dispatch }}>
			{props.children}
		</LocationContext.Provider>
	);
};

export const EpisodeProvider = (props) => {
	const [state, dispatch] = useReducer(pageReducer, INITIAL_EPISODE);
	return (
		<EpisodeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</EpisodeContext.Provider>
	);
};

export const PageProvider = (props) => {
	const [state, dispatch] = useReducer(pageReducer, INITIAL_PAGE);
	return (
		<PageContext.Provider value={{ state, dispatch }}>
			{props.children}
		</PageContext.Provider>
	);
};

export const FilterProvider = (props) => {
	const [state, dispatch] = useReducer(filterReducer, INITIAL_FILTER);
	return (
		<FilterContext.Provider value={{ state, dispatch }}>
			{props.children}
		</FilterContext.Provider>
	);
};

export const ThemeProvider = (props) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_THEME);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
