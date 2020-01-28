import * as login from './login';
import * as alert from './alert';
import * as register from './register';
import * as forgot from './forgot';

const combined = {...login, ...alert, ...register, ...forgot};

export default combined;
