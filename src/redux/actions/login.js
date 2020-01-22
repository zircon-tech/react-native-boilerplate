import types from '../types';
import * as UserService from '../../services/api/user';

export const do_login = (user, password) => {
  return async dispatch => {

    dispatch(loginStart());

    const loginService = await UserService.login(user, password);

    if( loginService !== null ){
      dispatch(loginSucceed());
    } else {
      dispatch(loginFailed());
    }

  };
};

const loginStart = () => {
  return {
    type: types.LOGIN,
  };
};

const loginSucceed = () => {
  return {
    type: types.LOGIN_SUCCEEDED,
  };
};

const loginFailed = () => {
  return {
    type: types.LOGIN_FA,
  };
};
