import { GET_PRODUCTS } from "../types";
const initialState = {
  items: []
}

const products = (state = initialState, action) => {
  if (action.type === GET_PRODUCTS) {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
}
export default products;