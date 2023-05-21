import { combineReducers } from 'redux';

import categoriesReduer from '../reducers/categories'
import productsReducer from '../reducers/products'
import salesReducer from '../reducers/sales'
import suppliersReducer from '../reducers/suppliers'

const rootReducer = combineReducers({
  categories: categoriesReduer,
  products: productsReducer,
  sales: salesReducer,
  suppliers: suppliersReducer,
})
export default rootReducer;