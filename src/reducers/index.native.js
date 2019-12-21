import { combineReducers } from 'redux';
import dishesReducer from './dishesReducer';
import authReducer from './authReducer';

const rootReducer = () => combineReducers({
  dishes: dishesReducer,
  appAuth: authReducer
});

export default rootReducer;
