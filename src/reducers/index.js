import { combineReducers } from "redux";
import empresasReducer from "./empresasReducer";
import politicasReducer from "./politicasReducer";
import activosReducer from "./activosReducer";

export default combineReducers({
  empresasReducer,
  politicasReducer,
  activosReducer
});
