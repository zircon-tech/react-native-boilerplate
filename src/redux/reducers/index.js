import {combineReducers} from 'redux';
import login from './login';
import alert from './alert';
import register from './register';
import session from './session';

export default combineReducers({
  login,
  alert,
  register,
  session,
});
