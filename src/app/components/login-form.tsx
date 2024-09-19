'use client';

import React, { useState } from 'react';
import Button from './button';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../../utils/auth';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../schemas/schemas';
import toast from 'react-hot-toast';
import { handleCloseModal } from '../../../utils/modalHelpers';
import { useStateContext } from './state-provider';

interface FormValues {
  email: string;
  password: string;
};

interface LoginData {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { setIsOpenLog } = useStateContext();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {register, handleSubmit, formState: { errors }} = useForm<FormValues>({ resolver: yupResolver(loginSchema) });


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (data: LoginData) => {
    try {
      const user = await login(data.email, data.password);
      
      if (user) {
        toast.success('Login successful');
        handleCloseModal(setIsOpenLog)();
      }
    } catch (error) {
      toast.error('Login error. Please try again!');
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          className="input h-[54px] mb-[18px]"
          {...register('email')}
        />
        <p className="absolute top-1 left-3 text-xs text-red">
          {errors.email?.message}
        </p>
      </div>

      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="input h-[54px] mb-10"
          {...register('password')}
        />
        <p className="absolute top-1 left-3 text-xs text-red">
          {errors.password?.message}
        </p>
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
        type="submit"
        className="w-full py-4 rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover mb-5"
      >
        Log In
      </Button>
    </form>
  );
}
