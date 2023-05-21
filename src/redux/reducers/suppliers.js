import { GET_SUPPLIERS } from "../types";
const initialState = {
  items: []
}

const suppliers = (state = initialState, action) => {
  if (action.type === GET_SUPPLIERS) {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
}
export default suppliers;