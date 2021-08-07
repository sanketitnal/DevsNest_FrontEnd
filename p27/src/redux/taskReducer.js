const taskReducer = (state = [], action) => {
	let newState;
	switch (action.type) {
		case "ADD_TASK":
			newState = [{ ...action.payload, taskId: state.length }, ...state];
			break;

		case "REMOVE_TASK":
			newState = state.filter((task) => task.taskId !== action.payload);
			break;

		case "UPDATE_CHECKED":
			for (let i = 0; i < state.length; i++) {
				if (state[i].taskId === action.payload.taskId) {
					state[i].isChecked = action.payload.isChecked;
				}
			}
			newState = [...state];
			break;

		default:
			newState = state;
	}

	window.localStorage.setItem("tasks", JSON.stringify(newState));
	return newState;
};

export default taskReducer;
