import {combineReducers} from 'redux';
import login from './login';
import alert from './alert';

export default combineReducers({
  login,
  alert,
});
