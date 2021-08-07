import { createStore } from "redux";
import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
	taskList: taskReducer,
});

const store = createStore(rootReducer);

export default store;
