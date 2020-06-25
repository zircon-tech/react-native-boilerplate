import types from '../types';

export const defaultState = {
  currentUser: null,
  jwtToken: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SESSION_INIT:
      return {
        ...state,
        ...action.value,
      };
    case types.SESSION_CLEAR:
      return defaultState;
    default:
      return state;
  }
};

export default reducer;
