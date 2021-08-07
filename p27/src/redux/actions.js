const addTask = (taskInfo) => {
	return {
		type: "ADD_TASK",
		payload: taskInfo,
	};
};

const removeTask = (taskId) => {
	return {
		type: "REMOVE_TASK",
		payload: taskId,
	};
};

const updateChecked = (taskId, isChecked) => {
	return {
		type: "UPDATE_CHECKED",
		payload: {
			taskId,
			isChecked,
		},
	};
};

export { addTask, removeTask, updateChecked };
