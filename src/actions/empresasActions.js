import axios from "axios";

export const traerTodos = () => async dispatch => {
  const empresas = await axios.get("http://localhost:1500/api/v2/empresas");
  dispatch({
    type: "traer_empresas",
    payload: empresas.data
  });
};
