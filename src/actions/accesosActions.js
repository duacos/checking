import axios from "axios";
import { TRAER_UNO, ERROR } from "../types/AccesosTypes";

export const editarAcceso = (empresa_id, data) => async (
  dispatch,
  getState
) => {
  if (
    Object.keys(getState().accesosReducer.data).length !== 0 ||
    getState().empresasReducer.data.acceso
  ) {
    const acceso_id =
      getState().accesosReducer.data.id ||
      getState().empresasReducer.data.acceso.id;
    try {
      console.log("put executed from accesosActions");

      const response = await axios.put(
        `http://localhost:1500/api/v2/accesos/${acceso_id}`,
        data
      );

      dispatch({
        type: TRAER_UNO,
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
    console.log("post executed from accesosActions state");
    const response = await axios.post(`http://localhost:1500/api/v2/accesos`, {
      ...data,
      empresa_id
    });
    dispatch({
      type: TRAER_UNO,
      payload: response.data
    });
  }
};
