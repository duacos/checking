import axios from "axios";
import { TRAER_UNO, ERROR } from "../types/ActivosTypes";

export const editarActivo = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().activosReducer.data).length > 0 ||
    getState().empresasReducer.data.activo
  ) {
    const activo_id =
      getState().activosReducer.data.id ||
      getState().empresasReducer.data.activo.id;
    try {
      const response = await axios.put(
        `http://localhost:1500/api/v2/activos/${activo_id}`,
        data
      );

      dispatch({
        type: TRAER_UNO,
        payload: response.data
      });

      console.log("put executed from activosActions with state: ", getState());
    } catch (error) {
      console.log("Error: " + error.message);
      dispatch({
        type: ERROR,
        payload: "algo salió mal"
      });
    }
  } else {
    console.log("post executed from activosActions state");
    console.log("state BEFORE: ", getState());

    const response = await axios.post(`http://localhost:1500/api/v2/activos`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_UNO,
      payload: response.data
    });

    console.log("state AFTER: ", getState());
  }
};
