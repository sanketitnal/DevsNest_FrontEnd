export const changeEmail = (currentEmail) => {
	return {
		type: "CHANGE_EMAIL",
		payload: currentEmail,
	};
};

export const changeName = (currentName) => {
	return {
		type: "CHANGE_NAME",
		payload: currentName,
	};
};
