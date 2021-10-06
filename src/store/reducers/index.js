import addUser from "./addUser";
import currentUserData from "./currentUserData";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  addUser,
  currentUserData,
});

export default rootReducer;
