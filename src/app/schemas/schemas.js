import * as Yup from 'yup';

const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;

const phonePattern = /^\+380\d{9}$/;

export const regiastrationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name must be no more than 30 characters')
    .test(
      'not-only-spaces',
      'The field cannot contain only spaces',
      (value) => {
        if (value === null || value === undefined || value === '') return true;
        return value.trim() !== '';
      }
    )
    .required('Enter your name'),
  email: Yup.string()
    .email('Enter a valid email address')
    .matches(emailRegexp, 'Enter a valid email address')
    .required('Enter your email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must be no more than 30 characters')
    .test(
      'not-only-spaces',
      'The field cannot contain only spaces',
      (value) => {
        if (value === null || value === undefined || value === '') return true;
        return value.trim() !== '';
      }
    )
    .required('Enter your password'),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email address')
    .matches(emailRegexp, 'Enter a valid email address')
    .required('Enter your email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .test(
      'not-only-spaces',
      'The field cannot contain only spaces',
      (value) => {
        if (value === null || value === undefined || value === '') return true;
        return value.trim() !== '';
      }
    )
    .required('Enter your password'),
});

export const orderSchema = Yup.object().shape({
  full_name: Yup.string()
    .min(4, 'Full name must be at least 4 characters')
    .max(30, 'Full name must be no more than 30 characters')
    .test(
      'not-only-spaces',
      'The field cannot contain only spaces',
      (value) => {
        if (value === null || value === undefined || value === '') return true;
        return value.trim() !== '';
      }
    )
    .required('Enter your name and surname'),
  email: Yup.string()
    .email('Enter a valid email address')
    .matches(emailRegexp, 'Enter a valid email address')
    .required('Enter your email'),
  phone_number: Yup.string()
    .matches(phonePattern, 'Enter a valid phone number')
    .required('Enter your phone number'),
  englishReason: Yup.string()
    .oneOf(
      ['career', 'kids', 'abroad', 'exams', 'hobby'],
      'Select one of the options'
    )
    .required('Select one of the options'),
});
