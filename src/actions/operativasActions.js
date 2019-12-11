import axios from "axios";
import { TRAER_UNA, ERROR } from "../types/OperativasTypes";

export const editarOperativa = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().operativasReducer.data).length > 0 ||
    getState().empresasReducer.data.operativa
  ) {
    const operativa_id =
      getState().operativasReducer.data.id ||
      getState().empresasReducer.data.operativa.id;
    try {
      const response = await axios.put(
        `http://localhost:1500/api/v2/operativas/${operativa_id}`,
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
    const response = await axios.post(
      `http://localhost:1500/api/v2/operativas`,
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
