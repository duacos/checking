import axios from "axios";
import { TRAER_UNA, ERROR } from "../types/PoliticasTypes";

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
        `http://localhost:1500/api/v2/politicas/${politica_id}`,
        data
      );

      dispatch({
        type: TRAER_UNA,
        payload: response.data
      });
      console.log(
        "put executed from politicasActions with state: ",
        getState()
      );
    } catch (error) {
      console.log("Error: " + error.message);
      dispatch({
        type: ERROR,
        payload: "algo salió mal"
      });
    }
  } else {
    console.log("post executed from politicasActions state");
    console.log("state BEFORE: ", getState());

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

    console.log("state AFTER: ", getState());
  }
};
