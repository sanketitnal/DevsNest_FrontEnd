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

export { addTask, removeTask };
