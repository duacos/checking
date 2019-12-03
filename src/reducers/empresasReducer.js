const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "traer_empresas":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
