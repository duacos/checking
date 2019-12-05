import axios from "axios";
import {
  TRAER_EMPRESAS,
  ERROR,
  LOADING,
  TRAER_UNO
} from "../types/EmpresasTypes";

export const traerTodos = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get("http://localhost:1500/api/v2/empresas");
    dispatch({
      type: TRAER_EMPRESAS,
      payload: response.data
    });
  } catch (error) {
    console.log("Error: " + error.message);
    dispatch({
      type: ERROR,
      payload: "algo salió mal"
    });
  }
};

export const traerUno = empresa_id => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const response = await axios.get(
      `http://localhost:1500/api/v2/empresas/${empresa_id}`
    );

    dispatch({
      type: TRAER_UNO,
      payload: response.data
    });
  } catch (error) {
    console.log("Error: " + error.message);
    dispatch({
      type: ERROR,
      payload: "algo salió mal"
    });
  }
};
