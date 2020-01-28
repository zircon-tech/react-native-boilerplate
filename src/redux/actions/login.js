import types from '../types';
import * as userService from '../../services/api/userService';
import ClientError from '../../lib/utils/exceptions';
import {setToken} from '../../lib/utils/auth';
import * as alertActions from './alert';

const loginSetLoading = () => ({
  type: types.LOGIN_SET_LOADING,
});

const login = user => ({
  type: types.LOGIN,
  user,
});

const loginFail = error => ({
  type: types.LOGIN_FAILED,
  error,
});

const forgot = email => ({
  type: types.FORGOT,
  email,
});

const forgotSetLoading = email => ({
  type: types.FORGOT_SET_LOADING,
});

const forgotFail = error => ({
  type: types.FORGOT_FAILED,
  error,
});

const forgot_code = code => ({
  type: types.FORGOT_CODE,
  code,
});

const forgot_code_password = () => ({
  type: types.FORGOT_CODE_PASSWORD,
});

export const doLogin = (email, password) => dispatch => {
  dispatch(loginSetLoading());
  return userService.login(email, password).then(
    response => {
      dispatch(login(response.data.user));
      setToken(response.data.jwtToken);
      return true;
    },
    error => {
      const _message = 'The user or password was incorrect!, please try again.';
      const message =
        error instanceof ClientError ? _message : 'Internal Error';
      dispatch(loginFail(error));
      dispatch(alertActions.error(message));
    },
  );
};

export const doRegister = user => dispatch => {
  dispatch(loginSetLoading());
  return userService.register(user).then(
    () => {
      dispatch(alertActions.success('The user was reigister successfully'));
      return true;
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};

export const doForgotPassword = email => dispatch => {
  dispatch(forgotSetLoading());
  return userService.forgotPassword(email).then(
    () => {
      dispatch(
        alertActions.success('The email was sent, please check your mailbox.'),
      );
      dispatch(forgot(email));
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
      dispatch(forgotFail(error));
    },
  );
};

export const doCheckCode = (email, code) => dispatch => {
  dispatch(forgotSetLoading());
  return userService.forgotPasswordCheck(email, code).then(
    response => {
      dispatch(alertActions.success('The code is correct!'));
      dispatch(forgot_code(code));
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};

export const doCodeChangePassword = (email, code, password) => dispatch => {
  dispatch(forgotSetLoading());
  return userService.forgotPasswordConfirm(email, code, password).then(
    response => {
      dispatch(alertActions.success('Password changed!'));
      dispatch(forgot_code_password());
    },
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};

export const doCheckValidationToken = token => dispatch => {
  dispatch(loginSetLoading());
  return userService.checkValidationToken(token).then(
    () => {},
    error => {
      const message =
        error instanceof ClientError ? error.message : 'Internal Error';
      dispatch(alertActions.error(message));
    },
  );
};
