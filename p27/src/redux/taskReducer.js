const taskReducer = (state = [], action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [{ ...action.payload, taskId: state.length }, ...state];

		case "REMOVE_TASK":
			return state.filter((task) => task.taskId !== action.payload);

		case "UPDATE_CHECKED":
			for (let i = 0; i < state.length; i++) {
				if (state[i].taskId === action.payload.taskId) {
					state[i].isChecked = action.payload.isChecked;
				}
			}
			return [...state];

		default:
			return state;
	}
};

export default taskReducer;
