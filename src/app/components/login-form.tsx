'use client';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import Button from './button';
import * as Yup from 'yup';
import { login } from '../../../utils/auth';

interface FormValues {
  email: string;
  password: string;
}

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Enter your email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Enter your password')
})

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    // const user = {
    //   email: values.email,
    //   password: values.password,
    // };

    try {
      const user = await login(values.email, values.password);
      console.log('Login successful');
      console.log(user);
    } catch (error) {
      console.log('Login error', error);
    }

    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit} validationSchema={loginSchema}>
      <Form>
        <div className='relative'>
          <Field
            name='email'
            type='email'
            placeholder='Email'
            className='input h-[54px] mb-[18px]'
          />
          <ErrorMessage name='email' component='p' className='absolute top-1 left-3 text-xs text-red' />
        </div>

        <div className='relative'>
          <Field
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='input h-[54px] mb-10'
          />
          <ErrorMessage name='password' component='p' className='absolute top-1 left-3 text-xs text-red' />
          <Button
            onClick={handleShowPassword}
            type='button'
            className='absolute top-4 right-5 stroke-text-color-muted fill-none eye-hover'
          >
            <svg width={20} height={20}>
              <use href='/icons/icons.svg#icon-eye'></use>
            </svg>
          </Button>
        </div>

        <Button
          type='submit'
          className='w-full py-4 rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover mb-5'
        >
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
