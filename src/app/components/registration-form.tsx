'use client';

import React, { useState } from 'react';
import Button from './button';
import { register } from '../../../utils/auth';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { handleCloseModal } from '../../../utils/modalHelpers';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface RegistrationFormProps {
  onCloseModal: () => void;
}

const regiastrationSchema = Yup.object({
  name: Yup.string().min(2, 'Name must be at least 2 characters').max(30, 'Name must be no more than 30 characters').required('Enter your name'),
  email: Yup.string().email('Invalid email address').required('Enter your email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').max(30, 'Password must be no more than 30 characters').required('Enter your password')
})

export default function RegistrationForm({ onCloseModal }: RegistrationFormProps) {
  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    setLoading(true);
    setError('');

    try {
      const createdUser = await register(values.email, values.password, values.name);
      console.log('Registration successful');
      console.log(createdUser);
      handleCloseModal(onCloseModal)();
      router.push("/teachers");
    } catch (error) {
      console.log('Registration error', error);
    }
    actions.resetForm();
    
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit} validationSchema={regiastrationSchema}>
      <Form>
      <div className='relative'>
          <Field
            name='name'
            type='text'
            placeholder='Name'
            className='input h-[54px] mb-[18px]'
          />
          <ErrorMessage name='name' component='p' className='absolute top-1 left-3 text-xs text-red' />
        </div>

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
        type={'submit'}
        className="w-full py-4 rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover mb-5"
      >
        Sign Up
      </Button>
      </Form>
    </Formik>
  );
}