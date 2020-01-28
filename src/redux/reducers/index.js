import {combineReducers} from 'redux';
import login from './login';
import alert from './alert';
import register from './register';
import forgot from './forgot';

export default combineReducers({
  login,
  alert,
  register,
  forgot,
});
