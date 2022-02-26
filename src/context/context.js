import { createContext, useReducer } from 'react';

import {
	filterReducer,
	themeReducer,
	infoReducer,
	selectReducer,
} from './reducers';
import {
	INITIAL_FILTER,
	INITIAL_THEME,
	INITIAL_SELECT,
	INITIAL_INFO,
} from './states';

export const ThemeContext = createContext();
export const FilterContext = createContext();
export const SelectContext = createContext();
export const InfoContext = createContext();

export const InfoProvider = (props) => {
	const [state, dispatch] = useReducer(infoReducer, INITIAL_INFO);
	return (
		<InfoContext.Provider value={{ state, dispatch }}>
			{props.children}
		</InfoContext.Provider>
	);
};

export const SelectProvider = (props) => {
	const [state, dispatch] = useReducer(selectReducer, INITIAL_SELECT);
	return (
		<SelectContext.Provider value={{ state, dispatch }}>
			{props.children}
		</SelectContext.Provider>
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
