
import { getCategories } from "../../utilites/api"
import { GET_CATEGORIES } from "../types";

export function getCategoriesHandler() {
  return async (dispatch) => {
    try {
      const response = await getCategories();
      if (response.status === 200) {
        dispatch({ type: GET_CATEGORIES, payload: response.data });
      } else {
        console.log('err');
      }
    } catch (error) {
      console.log(error);
    }
  };
}