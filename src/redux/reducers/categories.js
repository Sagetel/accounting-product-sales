const initialState = {
 items: []
}

const categories = (state = initialState, action) => {
  if (action.type === 'GET_CATEGORIES') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
}
export default categories;