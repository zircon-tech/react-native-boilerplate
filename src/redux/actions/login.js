import * as types from '../types';
import * as UserService from '../../services/api/user';

export const do_login = (user, password) => {
  return async dispatch => {
    console.log('=====================');
    console.log('user', user);
    console.log('password', password);
    console.log('=====================');
  };
};
