'use client';

import React, { useState } from 'react';
import Button from './button';
import { register } from '../../../utils/auth';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import { handleCloseModal } from '../../../utils/modalHelpers';
import { regiastrationSchema } from '../schemas/schemas';
import toast from 'react-hot-toast';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface RegistrationFormProps {
  onCloseModal: () => void;
}

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
      await register(values.email, values.password, values.name);
      setLoading(false);
      toast.success('You are successfully registered!');
      handleCloseModal(onCloseModal)();
      router.push("/teachers");
    } catch (error) {
      toast.error('Registration error. Please try again!');
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