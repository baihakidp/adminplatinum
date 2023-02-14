import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { navReducer } from "./navReducer";
import { carReducer } from "./carReducer";

const rootReducer = combineReducers({
  authReducer,
  navReducer,
  reduceCar: carReducer,
});

export default rootReducer;
