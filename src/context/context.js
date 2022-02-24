import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();
export const FilterContext = createContext();
export const PageContext = createContext();

const INITIAL_STATE = {
	darkMode: new Date().getHours() > 18 || new Date().getHours() < 6,
};

const INITIAL_FILTER = {
	value: '',
};

const INITIAL_PAGE = {
	value: 1,
};

const pageReducer = (state, action) => {
	switch (action.type) {
		case 'NEXT':
			return { ...state, value: state.value + 1 };
		case 'PREV':
			return { ...state, value: state.value - 1 };
		case 'CHANGE':
			return { ...state, value: action.payload };
		default:
			return state;
	}
};

const filterReducer = (state, action) => {
	switch (action.type) {
		case 'FILTER':
			return { ...state, value: action.payload };
		default:
			return state;
	}
};

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE':
			return { darkMode: !state.darkMode };
		default:
			return state;
	}
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
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ThemeContext.Provider>
	);
};
