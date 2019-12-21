import { combineReducers } from 'redux';
import dishesReducer from './dishesReducer';
import authReducer from './authReducer';

import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  dishes: dishesReducer,
  appAuth: authReducer
});

export default rootReducer;
