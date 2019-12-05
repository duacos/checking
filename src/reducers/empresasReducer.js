import {
  TRAER_EMPRESAS,
  ERROR,
  LOADING,
  TRAER_UNO
} from "../types/EmpresasTypes";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_EMPRESAS:
      return { ...state, data: action.payload, loading: false, error: "" };

    case LOADING:
      return { ...state, loading: true };

    case TRAER_UNO:
      return { ...state, data: action.payload, loading: false, error: "" };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
