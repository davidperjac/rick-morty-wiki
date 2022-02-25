export const pageReducer = (state, action) => {
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

export const episodeReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE':
			return { ...state, value: action.payload };
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
