'use client';

import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import Button from './button';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const user = {
      email: values.email,
      password: values.password,
    };

    console.log(user);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field
          name={'email'}
          type={'email'}
          placeholder={'Email'}
          className={'input h-[54px] mb-[18px]'}
        />
        <div className="relative">
          <Field
            name={'password'}
            type={showPassword ? 'text' : 'password'}
            placeholder={'Password'}
            className={'input h-[54px] mb-10'}
          />
          <Button
            onClick={handleShowPassword}
            type="button"
            className="absolute top-4 right-5 stroke-text-color-muted fill-none eye-hover"
          >
            <svg width={20} height={20}>
              <use href="/icons/icons.svg#icon-eye"></use>
            </svg>
          </Button>
        </div>

        <Button
          type={'submit'}
          className="w-full py-4 rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover"
        >
          Log In
        </Button>
      </Form>
    </Formik>
  );
}
