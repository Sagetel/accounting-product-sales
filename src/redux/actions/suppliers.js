
import { getSuppliers } from "../../utilites/api"
import { GET_SUPPLIERS } from "../types";

export function getSuppliersHandler() {
  return async (dispatch) => {
    try {
      const response = await getSuppliers();
      if (response.status === 200) {
        dispatch({ type: GET_SUPPLIERS, payload: response.data });
      } else {
        console.log('err');
      }
    } catch (error) {
      console.log(error);
    }
  };
}