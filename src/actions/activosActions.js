import axios from "axios";
import {
  TRAER_ACTIVOS,
  EDITAR_ACTIVO,
  TRAER_UN_ACTIVO,
  TOGGLE_ACTIVO
} from "../types/ActivosTypes";

export const traerUno = empresa_id => async dispatch => {
  const response = await axios.get(
    `http://localhost:1500/api/v2/activos/${empresa_id}`
  );
  dispatch({
    type: TRAER_UN_ACTIVO,
    payload: response.data
  });
};

export const editarActivo = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (getState().empresasReducer.data.activo) {
    console.log("put executed from activosActions");

    const response = await axios.put(
      `http://localhost:1500/api/v2/activos/${empresa_id}`,
      data
    );
    dispatch({
      type: EDITAR_ACTIVO,
      payload: response.data
    });
  } else {
    console.log("post executed from activosActions");
    const response = await axios.post(`http://localhost:1500/api/v2/activos`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_ACTIVOS,
      payload: response.data
    });
  }
};

export const toggleVisible = visible => async (dispatch, getState) => {
  getState().politicasReducer.visible = false;
  dispatch({
    type: TOGGLE_ACTIVO,
    payload: !visible
  });
};
