import initialState from './initialState';
import { loginAPI } from '../api/loginAPI';
import { signupAPI } from '../api/signupAPI';
/**
 ** Types
 */
export const Types = {
  LOGIN_REQUEST: 'login/REQUEST',
  SIGNUP_REQUEST: 'signup/REQUEST',
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
    case Types.SIGNUP_REQUEST:
      return {
        ...state,
        isSignedup: true,
      };

    default:
      return state;
  }
}

/**
 ** Actions
 */
// export const Creators = {
export const loginRequest = (data) => {
  return dispatch => {
    return loginAPI(data).then(() => {
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

export const signupRequest = (data) => {
  return dispatch => {
    return signupAPI(data).then(() => {
      dispatch(setSignup());
    }).catch(err => {
      return err;
    })
  }
};

const setSignup = () => {
  return {
    type: Types.SIGNUP_REQUEST
  }
}
