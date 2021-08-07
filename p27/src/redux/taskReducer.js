const taskReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [action.payload, ...state];
		case "DELETE_TASK":
			return state.filter((task) => task.id !== action.payload);
		default:
			return state;
	}
};

export default taskReducer;
