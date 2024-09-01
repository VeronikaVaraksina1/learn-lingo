'use client';

import { Field, Form, Formik } from 'formik';
import React, { useId, useState } from 'react';
import Button from './button';

export default function LoginForm() {
  const nameId = useId();
  const passwordId = useId();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        const user = {
          email: values.email,
          password: values.password,
        };

        console.log(user);

        actions.resetForm();
      }}
    >
      <Form>
        <Field name={'email'} type={'email'} placeholder={'Email'} className={'input mb-[18px]'} />
        <div className="relative">
          <Field
            name={'password'} type={showPassword ? 'text' : 'password'} placeholder={'Password'} className={'input mb-10'}
          />
          <Button
            onClick={handleShowPassword}
            type="button"
            className="absolute top-5 right-5 stroke-text-color-muted fill-none eye-hover"
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
