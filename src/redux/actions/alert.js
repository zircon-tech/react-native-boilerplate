import types from '../types';

export const success = (message = "The operation was successful") => ({ type: types.ALERT_SUCCESS, message });
export const error = (message = "There was an error, please try again.") => ({ type: types.ALERT_ERROR, message });
export const clear = () => ({ type: types.ALERT_CLEAR });