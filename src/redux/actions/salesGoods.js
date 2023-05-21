
import { getSales } from "../../utilites/api"
import { GET_SALES } from "../types";

export function getSalesHandler() {
  return async (dispatch) => {
    try {
      const response = await getSales();
      if (response.status === 200) {
        dispatch({ type: GET_SALES, payload: response.data });
      } else {
        console.log('err');
      }
    } catch (error) {
      console.log(error);
    }
  };
}