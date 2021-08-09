const weatherReducer = (
	state = { error: { message: "NO CITY SELECTED" } },
	action
) => {
	switch (action.type) {
		case "UPDATE_WEATHER":
			return { ...action.payload, error: null };
		case "ERROR":
			return { error: { message: action.payload } };
		default:
			return state;
	}
};

export default weatherReducer;
