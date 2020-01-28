import {unAuthAxiosCall, authAxiosCall} from './axios';
import {deleteToken} from '../../lib/utils/auth';

export const login = async (email, password) =>
  unAuthAxiosCall('/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });

export const register = async (
  username,
  firstname,
  lastname,
  phone,
  email,
  password,
) =>
  unAuthAxiosCall('/user', {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      first_name: firstname,
      last_name: lastname,
      cellphone: phone,
      email: email,
      password: password,
    }),
  });

export const forgotPassword = email =>
  unAuthAxiosCall('/user/forgot_password', {
    method: 'POST',
    body: JSON.stringify({
      email,
      url: 'reset_password?token=',
    }),
  });

export const forgotPasswordCheck = async (email, code) =>
  unAuthAxiosCall('/user/forgot_password_check', {
    method: 'POST',
    body: JSON.stringify({
      email,
      code,
    }),
  });

export const forgotPasswordConfirm = async (email, code, password) =>
  unAuthAxiosCall('/user/forgot_password_confirm', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      code,
    }),
  });

export function logout() {
  deleteToken();
  return Promise.resolve(true);
  // return authAxiosCall(
  //   '/logout',
  //   {
  //     method: 'POST',
  //   }
  // ).then(() => {
  //   deleteToken();
  // });
}

export function loginWGoogle(accessToken, user) {
  return unAuthAxiosCall('/user/google_account', {
    method: 'POST',
    body: JSON.stringify({
      token: accessToken,
      user: user || {},
    }),
  });
}

export const checkValidationToken = async token =>
  authAxiosCall('/user/forgot_password_checktoken', {
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
  });
