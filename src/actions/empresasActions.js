import axios from "axios";
import {
  ERROR,
  LOADING,
  TRAER_EMPRESAS_DATA,
  TOGGLE_FEATURE
} from "../types/EmpresasTypes";

import { API } from "../config";

export const traerTodos = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get(`${API.url}/api/v2/empresas`);
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
      `${API.url}/api/v2/empresas/${empresa_id}`
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
    const response = await axios.post(`${API.url}/api/v2/empresas`, {
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
  Object.keys(getState().empresasReducer.visibility).forEach(key => {
    if (getState().empresasReducer.visibility[feature] !== feature)
      getState().empresasReducer.visibility[key] = false;
  });

  dispatch({
    type: TOGGLE_FEATURE,
    payload: feature
  });
};

export const locationChange = empresa_id => async (dispatch, getState) => {
  const prev_id = getState().empresasReducer.data.id;
  if (empresa_id !== prev_id || !empresa_id) {
    getState().politicasReducer.data = {};
    getState().activosReducer.data = {};
    getState().accesosReducer.data = {};
    getState().ambientesReducer.data = {};
    getState().operativasReducer.data = {};
    getState().telesReducer.data = {};
    getState().desarrollosReducer.data = {};

    console.log("LOCATION CHANGE");
  }
};
