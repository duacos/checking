import { TRAER_UNO } from "../types/ActivosTypes";

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_UNO:
      return { ...state, data: action.payload, loading: false, error: "" };

    default:
      return state;
  }
};
