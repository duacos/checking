import {
  TRAER_EMPRESAS_DATA,
  ERROR,
  LOADING,
  TOGGLE_FEATURE
} from "../types/EmpresasTypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",

  visibility: {
    activoVisible: false,
    accesoVisible: false,
    politicaVisible: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_EMPRESAS_DATA:
      return { ...state, data: action.payload, loading: false, error: "" };

    case LOADING:
      return { ...state, loading: true };

    case TOGGLE_FEATURE: {
      return {
        ...state,
        visibility: {
          ...state.visibility,
          [action.payload]: !state[action.payload]
        }
      };
    }

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
