import types from '../types';

export const sessionInit = (value) => ({
  type: types.SESSION_INIT,
  value,
});

export const sessionClean = () => {
  return {
    type: types.SESSION_CLEAR,
  };
};
