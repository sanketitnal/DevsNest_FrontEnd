import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import weatherReducer from "./reducers/weatherReducer";
import themeReducer from "./reducers/themeReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	weather: weatherReducer,
	theme: themeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
