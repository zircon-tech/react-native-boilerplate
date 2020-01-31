import types from '../types';

const defaultState = {
  email: null,
  code: null,
  loading: false,
  error: null,
};

const forgot = (state = defaultState, action) => {
  switch (action.type) {
    case types.FORGOT_SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FORGOT:
      return {
        ...state,
        email: action.email,
        error: null,
        loading: false,
      };
    case types.FORGOT_CLEAN:
      return {
        ...defaultState,
      };
    case types.FORGOT_CODE:
      return {
        ...state,
        code: action.code,
        error: null,
        loading: false,
      };
    case types.FORGOT_CODE_PASSWORD:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case types.FORGOT_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};
export default forgot;
