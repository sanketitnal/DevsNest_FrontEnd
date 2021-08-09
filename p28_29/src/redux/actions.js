const getAndUpdateWeather = (cityName) => {
	return (dispatch) => {
		fetch(
			`http://api.weatherapi.com/v1/forecast.json?key=162b77e663854bff817124743210808&q=${cityName}&aqi=no&alerts=no`
		)
			.then((response) => response.json())
			.then((response) => {
				dispatch({
					type: response.error == null ? "UPDATE_WEATHER" : "ERROR",
					payload: response.error == null ? response : response.error,
				});
			})
			.catch((err) => {
				dispatch({
					type: "ERROR",
					payload: err,
				});
			});
	};
};

const changeTheme = (newTheme) => {
	return {
		type: "CHANGE_THEME",
		payload: newTheme,
	};
};

export { changeTheme, getAndUpdateWeather };
