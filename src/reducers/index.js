import { combineReducers } from 'redux';
import fooReducer from './fooReducer';
import barReducer from './barReducer';
import walletReducer from './walletReducer';
import dishesReducer from './dishesReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  foo: fooReducer,
  bar: barReducer,
  wallet: walletReducer,
  dishes: dishesReducer
});

export default rootReducer;
