import {
  TRAER_UNO,
  TOGGLE_ACTIVO,
  LOCATION_CHANGE_ACTIVO
} from "../types/ActivosTypes";

const INITIAL_STATE = {
  data: {},
  visible: false,
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CHANGE_ACTIVO: {
      return state;
    }

    case TOGGLE_ACTIVO:
      return { ...state, visible: action.payload };

    case TRAER_UNO:
      return { ...state, data: action.payload, loading: false, error: "" };

    default:
      return state;
  }
};
