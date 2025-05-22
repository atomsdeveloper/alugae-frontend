// This file is responsible for combining all the reducers in the application.
import { combineReducers } from "redux";

// Reducers
import auth from "./auth/reducer";

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
