import axios from "axios";
import { TRAER_UNA, ERROR } from "../types/PoliticasTypes";
import { API } from "../config";

export const editarPolitica = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().politicasReducer.data).length > 0 ||
    getState().empresasReducer.data.politica
  ) {
    const politica_id =
      getState().politicasReducer.data.id ||
      getState().empresasReducer.data.politica.id;
    try {
      const response = await axios.put(
        `${API.url}/api/v2/politicas/${politica_id}`,
        data
      );

      dispatch({
        type: TRAER_UNA,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: "algo salió mal"
      });
    }
  } else {
    const response = await axios.post(`${API.url}/api/v2/politicas`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_UNA,
      payload: response.data
    });
  }
};
