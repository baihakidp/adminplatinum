import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { navReducer } from "./navReducer";

const rootReducer = combineReducers({
  authReducer,
  navReducer,
});

export default rootReducer;
