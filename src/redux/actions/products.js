
import { getProducts } from "../../utilites/api"
import { GET_PRODUCTS } from "../types";

export function getProductsHandler() {
  return async (dispatch) => {
    try {
      const response = await getProducts();
      if (response.status === 200) {
        dispatch({ type: GET_PRODUCTS, payload: response.data });
      } else {
        console.log('err');
      }
    } catch (error) {
      console.log(error);
    }
  };
}