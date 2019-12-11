import { combineReducers } from "redux";
import empresasReducer from "./empresasReducer";
import politicasReducer from "./politicasReducer";
import activosReducer from "./activosReducer";
import accesosReducer from "./accesosReducer";
import ambientesReducer from "./ambientesReducer";
import operativasReducer from "./operativasReducer";
import telesReducer from "./telesReducer";
import desarrollosReducer from "./desarrollosReducer";

export default combineReducers({
  empresasReducer,
  politicasReducer,
  activosReducer,
  accesosReducer,
  ambientesReducer,
  operativasReducer,
  telesReducer,
  desarrollosReducer
});
