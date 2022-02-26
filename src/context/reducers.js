export const infoReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_PAGES':
			return { ...state, pages: action.payload };
		case 'CHANGE_COUNT':
			return { ...state, count: action.payload };
		default:
			return state;
	}
};

export const filterReducer = (state, action) => {
	switch (action.type) {
		case 'FILTER':
			return { ...state, value: action.payload };
		default:
			return state;
	}
};

export const themeReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE':
			return { darkMode: !state.darkMode };
		default:
			return state;
	}
};

export const selectReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_EPISODE':
			return { ...state, episode: action.payload };
		case 'CHANGE_LOCATION':
			return { ...state, location: action.payload };
		case 'NEXT_PAGE':
			return { ...state, page: state.page + 1 };
		case 'PREV_PAGE':
			return { ...state, page: state.page - 1 };
		case 'CHANGE_PAGE':
			return { ...state, page: action.payload };
		default:
			return state;
	}
};

export const locationReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return { ...state, value: action.payload };
		default:
			return state;
	}
};
