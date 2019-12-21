import { combineReducers } from 'redux';
import fooReducer from './fooReducer';
import barReducer from './barReducer';
import walletReducer from './walletReducer';
import dishesReducer from './dishesReducer';

const rootReducer = () => combineReducers({
  foo: fooReducer,
  bar: barReducer,
  wallet: walletReducer,
  dishes: dishesReducer
});

export default rootReducer;
