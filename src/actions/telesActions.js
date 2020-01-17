import axios from "axios";
import { TRAER_UNA, ERROR } from "../types/TelesTypes";
import { API } from "../config";

export const editarTele = (empresa_id, data) => async (dispatch, getState) => {
  if (
    Object.keys(getState().telesReducer.data).length > 0 ||
    getState().empresasReducer.data.tele
  ) {
    const tele_id =
      getState().telesReducer.data.id ||
      getState().empresasReducer.data.tele.id;
    try {
      const response = await axios.put(
        `${API.url}/api/v2/teles/${tele_id}`,
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
    const response = await axios.post(`${API.url}/api/v2/teles`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_UNA,
      payload: response.data
    });
  }
};
