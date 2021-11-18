import * as yup from 'yup';

export const validationSchemaReg = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup
    .string()
    .min(2, 'The name must be at least 2 characters long')
    .max(20, 'The name must not exceed 20 characters')
    .required('Name is required'),
  password: yup
    .string()
    .min(7, 'The password must be at least 7 characters long')
    .max(20, 'The password must not exceed 20 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], 'Passwords do not match'),
    })
    .required('Confirmation password is required'),
});

export const validationSchemaLog = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(7, 'The password must be at least 7 characters long')
    .max(20, 'The password must not exceed 20 characters')
    .required('Password is required'),
});
