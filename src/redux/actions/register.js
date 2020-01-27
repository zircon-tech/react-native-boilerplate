import types from '../types';
import * as userService from '../../services/api/userService';
import ClientError from '../../lib/utils/exceptions';
import {setToken} from '../../lib/utils/auth';
import * as alertActions from './alert';

const setLoadingAction = () => ({
  type: types.REGISTER_SET_LOADING,
});

const register = user => ({
  type: types.REGISTER,
  user,
});

export const doRegister = (
  username,
  firstname,
  lastname,
  email,
  phone,
  password,
) => dispatch => {
  console.log('=====================')
  console.log( 'username', username )
  console.log('=====================')
  dispatch(setLoadingAction());
  return userService
    .login(username, firstname, lastname, email, phone, password)
    .then(
      response => {
        dispatch(login(response.data.user));
        setToken(response.data.jwtToken);
        return true;
      },
      error => {
        const _message =
          'The user or password was incorrect!, please try again.';
        const message =
          error instanceof ClientError ? _message : 'Internal Error';
        dispatch(loginFail(error));
        dispatch(alertActions.error(message));
      },
    );
};
