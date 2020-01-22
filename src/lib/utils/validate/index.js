import validatejs from 'validate.js';
import validations from './validations';

export default validate = (fieldName, value) => {
  const formValues = [];
  formValues[fieldName] = value;

  const formFields = [];
  formFields[fieldName] = validations[fieldName];

  // The formValues and validated against the formFields
  // the variable result hold the error messages of the field
  const result = validatejs(formValues, formFields);

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[fieldName][0];
  }

  return null;
}
