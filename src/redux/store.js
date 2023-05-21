import rootReducer from './reducers';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeenhancers(applyMiddleware(thunk)));
export default store;