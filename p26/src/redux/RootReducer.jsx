import emailReducer from "./reducers/emailReducer";
import nameReducer from "./reducers/nameReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    name: nameReducer,
    email: emailReducer
});

export default rootReducer;