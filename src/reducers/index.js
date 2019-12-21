import { combineReducers } from 'redux';
import fooReducer from './fooReducer';
import barReducer from './barReducer';
import walletReducer from './walletReducer';
import dishesReducer from './dishesReducer';
import authReducer from './authReducer';

import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  foo: fooReducer,
  bar: barReducer,
  wallet: walletReducer,
  dishes: dishesReducer,
  appAuth: authReducer
});

export default rootReducer;
