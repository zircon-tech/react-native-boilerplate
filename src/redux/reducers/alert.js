import types from '../types';

const defaultState = {
  type: null,
  message: null,
};

const alert = (state = {}, action) => {
  switch (action.type) {
    case types.ALERT_SUCCESS:
      return {
        ...state,
        type: 'alert-success',
        message: action.message,
      };
    case types.ALERT_ERROR:
      return {
        ...state,
        type: 'alert-danger',
        message: action.message,
      };
    case types.ALERT_CLEAR:
      return defaultState;
    default:
      return state;
  }
};

export default alert;
