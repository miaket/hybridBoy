import initialState from './initialState';
import { loginAPI } from '../api/loginAPI';
/**
 ** Types
 */
export const Types = {
  LOGIN_REQUEST: 'login/REQUEST',
};

/**
 ** Reducer
 */
export default function loginReducer(state = initialState.appAuth, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        isLogged: true,
      };

    default:
      return state;
  }
}

/**
 ** Actions
 */
// export const Creators = {
export const loginRequest = () => {
  return dispatch => {
    return loginAPI().then(() => {
      dispatch(setLogin());
    }).catch(err => {
      return err;
    })
  }
};

const setLogin = () => {
  return {
    type: Types.LOGIN_REQUEST
  }
}
