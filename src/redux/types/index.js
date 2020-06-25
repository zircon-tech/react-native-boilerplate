import * as login from './login';
import * as alert from './alert';
import * as register from './register';
import * as session from './session';

export default {...login, ...alert, ...register, ...session};
