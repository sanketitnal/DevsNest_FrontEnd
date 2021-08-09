import { createStore } from "redux";
import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const persistedState = (function () {
	try {
		let state = localStorage.getItem("tasks");
		if (state === null) {
			return undefined;
		}
		return JSON.parse(state);
	} catch (err) {
		return undefined;
	}
})();

const rootReducer = combineReducers({
	taskList: taskReducer,
});

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
	try {
		let state = store.getState();
		localStorage.setItem("tasks", JSON.stringify(state));
	} catch (err) {
		// Do nothing for now
	}
});

export default store;
