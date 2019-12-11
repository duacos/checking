import { TRAER_UNA } from "../types/OperativasTypes";

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_UNA:
      return { ...state, data: action.payload, loading: false, error: "" };

    default:
      return state;
  }
};
