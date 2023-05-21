import { GET_SALES } from "../types";
const initialState = {
  items: []
}

const sales = (state = initialState, action) => {
  if (action.type === GET_SALES) {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
}
export default sales;