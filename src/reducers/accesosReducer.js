import {
  TRAER_UNO,
  TOGGLE_ACCESO,
  LOCATION_CHANGE_ACCESO
} from "../types/AccesosTypes";

const INITIAL_STATE = {
  data: {},
  visible: false,
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CHANGE_ACCESO: {
      return { ...state, data: {} };
    }

    case TOGGLE_ACCESO:
      return { ...state, visible: action.payload };

    case TRAER_UNO:
      return { ...state, data: action.payload, loading: false, error: "" };

    default:
      return state;
  }
};
