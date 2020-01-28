import {forgotCode} from 'configs';

const validations = {
  email: {
    presence: {
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },
  password: {
    presence: {
      message: '^Please enter a password',
    },
    length: {
      minimum: 5,
      message: '^Your password must be at least 5 characters',
    },
  },
  username: {
    presence: true,
    length: {
      minimum: 3,
      maximum: 20,
    },
    format: {
      pattern: '[a-zA-Z0-9]+',
      flags: 'i',
      message: 'can only contain a-z and 0-9',
    },
  },
  phone: {
    presence: {
      message: '^Please enter a valid phone number',
    },
    format: {
      pattern: '(\\+5989|09)([0-9]{7})',
      message: '^Invalid phone format. 09xxxxxxx / +5989xxxxxxx',
    },
  },
  name: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 20,
    },
    format: {
      pattern: '[a-zA-Z ]+',
      flags: 'i',
      message: 'can only contain a-z',
    },
  },
  lastName: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 20,
    },
    format: {
      pattern: '[a-zA-Z ]+',
      flags: 'i',
      message: 'can only contain a-z',
    },
  },
  code: {
    presence: {
      message: '^Please enter a valid code',
    },
    length: {
      is: forgotCode,
    },
  },
};

export default validations;
