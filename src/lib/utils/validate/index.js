import validatejs from 'validate.js';
import validations from './validations';

export default validate = fields => {
  const formValues = [];
  const formFields = [];

  for (var key in fields) {
    formValues[key] = fields[key];
    formFields[key] = validations[key];
  }

  const result = validatejs(fields, formFields);

  if (result) {
    return result;
  }

  return null;
};
