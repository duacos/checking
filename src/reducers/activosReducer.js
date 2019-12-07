import {
  TRAER_ACTIVOS,
  ERROR,
  LOADING,
  EDITAR_ACTIVO,
  TRAER_UN_ACTIVO,
  TOGGLE_ACTIVO
} from "../types/ActivosTypes";

const INITIAL_STATE = {
  data: [],
  visible: false,
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_ACTIVOS:
      return { ...state, data: action.payload, loading: false, error: "" };
    case EDITAR_ACTIVO:
      return { ...state, data: action.payload, loading: false, error: "" };
    case LOADING:
      return { ...state, loading: true };
    case TOGGLE_ACTIVO:
      return { ...state, visible: action.payload };

    case TRAER_UN_ACTIVO:
      return { ...state, data: action.payload, loading: false, error: "" };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
