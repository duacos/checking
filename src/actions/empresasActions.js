import axios from "axios";
import {
  ERROR,
  LOADING,
  TRAER_EMPRESAS_DATA,
  TOGGLE_FEATURE
} from "../types/EmpresasTypes";

export const traerTodos = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get("http://localhost:1500/api/v2/empresas");
    dispatch({
      type: TRAER_EMPRESAS_DATA,
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
      type: TRAER_EMPRESAS_DATA,
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

export const crearEmpresa = ({ name, description }) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:1500/api/v2/empresas", {
      name,
      description
    });

    dispatch({
      type: TRAER_EMPRESAS_DATA,
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

export const toggleFeature = feature => (dispatch, getState) => {
  console.log(
    "empresasActions politicasReducer BEFORE: ",
    getState().politicasReducer
  );
  Object.keys(getState().empresasReducer.visibility).forEach(key => {
    if (getState().empresasReducer.visibility[feature] !== feature)
      getState().empresasReducer.visibility[key] = false;
  });

  dispatch({
    type: TOGGLE_FEATURE,
    payload: feature
  });
  console.log(
    "empresasActions politicasReducer AFTER: ",
    getState().politicasReducer
  );
};

export const locationChange = empresa_id => async (dispatch, getState) => {
  const prev_id = getState().empresasReducer.data.id;
  if (empresa_id !== prev_id || !empresa_id) {
    getState().politicasReducer.data = {};
    getState().activosReducer.data = {};
    getState().accesosReducer.data = {};

    console.log("LOCATION CHANGE");
  }
};
