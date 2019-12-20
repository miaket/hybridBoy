import initialState from './initialState';
import { getDishesAPI } from '../api/dishesAPI';
/**
 ** Types
 */
export const Types = {
  DISHES_REQUEST: 'dishes/REQUEST',
};

/**
 ** Reducer
 */
export default function dishesReducer(state = initialState.dishes, action) {
  switch (action.type) {
    case Types.DISHES_REQUEST:
      return {
        ...state,
        data: action.payload.dishes,
      };

    default:
      return state;
  }
}

/**
 ** Actions
 */
// export const Creators = {
export const getDishes = () => {
  return dispatch => {
    return getDishesAPI().then(response => {
      dispatch(setDishes(response));
    }).catch(err => {
      return err;
    })
  }
};

const setDishes = (payload) => {
  return {
    type: Types.DISHES_REQUEST,
    payload
  }
}
