import axios from "axios";
import { TRAER_UNO, ERROR } from "../types/AmbientesTypes";
import { API } from "../config";

export const editarAmbiente = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().ambientesReducer.data).length > 0 ||
    getState().empresasReducer.data.ambiente
  ) {
    const ambiente_id =
      getState().ambientesReducer.data.id ||
      getState().empresasReducer.data.ambiente.id;
    try {
      const response = await axios.put(
        `${API.url}/api/v2/ambientes/${ambiente_id}`,
        data
      );

      dispatch({
        type: TRAER_UNO,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: "algo salió mal"
      });
    }
  } else {
    const response = await axios.post(`${API.url}/api/v2/ambientes`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_UNO,
      payload: response.data
    });

    console.log("Ambientes actions: ", response.data);
    console.log("Ambientes actions: ", getState().ambientesReducer.data);
  }
};
