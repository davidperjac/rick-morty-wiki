export const INITIAL_THEME = {
	darkMode: new Date().getHours() > 18 || new Date().getHours() < 6,
};

export const INITIAL_FILTER = {
	value: '',
};

export const INITIAL_SELECT = {
	page: 1,
	episode: 1,
	location: 1,
};

export const INITIAL_INFO = {
	count: 826,
	pages: 42,
};
