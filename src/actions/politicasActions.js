import axios from "axios";
import {
  TRAER_UNA,
  ERROR,
  TOGGLE_POLITICA,
  LOCATION_CHANGE_POLITICA
} from "../types/PoliticasTypes";

export const traerUna = politica_id => async dispatch => {
  const response = await axios.get(
    `http://localhost:1500/api/v2/politicas/${politica_id}`
  );
  dispatch({
    type: TRAER_UNA,
    payload: response.data
  });
};

export const editarPolitica = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().politicasReducer.data).length !== 0 ||
    getState().empresasReducer.data.politica
  ) {
    const politica_id =
      getState().politicasReducer.data.id ||
      getState().empresasReducer.data.politica.id;
    try {
      console.log("put executed from politicasActions");

      const response = await axios.put(
        `http://localhost:1500/api/v2/politicas/${politica_id}`,
        data
      );

      dispatch({
        type: TRAER_UNA,
        payload: response.data
      });
    } catch (error) {
      console.log("Error: " + error.message);
      dispatch({
        type: ERROR,
        payload: "algo salió mal"
      });
    }
  } else {
    console.log("post executed from politicasActions state");
    const response = await axios.post(
      `http://localhost:1500/api/v2/politicas`,
      {
        ...data,
        empresa_id
      }
    );
    dispatch({
      type: TRAER_UNA,
      payload: response.data
    });
  }
};

export const toggleVisible = visible => async (dispatch, getState) => {
  getState().activosReducer.visible = false;

  dispatch({
    type: TOGGLE_POLITICA,
    payload: !visible
  });
};

export const locationChange = empresa_id => async (dispatch, getState) => {
  const prev_id = getState().empresasReducer.data.id;
  if (empresa_id !== prev_id || !empresa_id) {
    dispatch({
      type: LOCATION_CHANGE_POLITICA
    });
  }
};
