import axios from "axios";
import { TRAER_UNA, ERROR } from "../types/DesarrollosTypes";
import { API } from "../config";

export const editarDesarrollo = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().desarrollosReducer.data).length > 0 ||
    getState().empresasReducer.data.desarrollo
  ) {
    const desarrollo_id =
      getState().desarrollosReducer.data.id ||
      getState().empresasReducer.data.desarrollo.id;
    try {
      const response = await axios.put(
        `${API.url}/api/v2/desarrollos/${desarrollo_id}`,
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
    const response = await axios.post(`${API.url}/api/v2/desarrollos`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_UNA,
      payload: response.data
    });
  }
};
