import * as types from '../types';

const defaultState = {
  user: null,
  loading: false,
  error: null,
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN_SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.user,
        error: null,
        loading: false,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.LOGOUT:
      return defaultState;

    default:
      return state;
  }
};
export default login;
