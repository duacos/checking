import {
  TRAER_UNA,
  LOCATION_CHANGE_POLITICA,
  TOGGLE_POLITICA
} from "../types/PoliticasTypes";

const INITIAL_STATE = {
  data: {},
  visible: false,
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_CHANGE_POLITICA: {
      return { ...state, data: {} };
    }

    case TOGGLE_POLITICA:
      return { ...state, visible: action.payload };

    case TRAER_UNA:
      return { ...state, data: action.payload, loading: false, error: "" };

    default:
      return state;
  }
};
