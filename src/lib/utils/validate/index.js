import validatejs from 'validate.js';
import validations from './validations';

export default validate = (fieldName, value) => {
  const formValues = [];
  formValues[fieldName] = value;

  const formFields = [];
  formFields[fieldName] = validations[fieldName];

  const result = validatejs(formValues, formFields);

  if (result) {
    return result[fieldName][0];
  }

  return null;
}
