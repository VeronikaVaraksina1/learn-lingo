'use client';

import React, { useState } from 'react';
import Button from './button';
import { registerUser } from '../../../utils/auth';
import { useRouter } from 'next/navigation';
import { handleCloseModal } from '../../../utils/modalHelpers';
import { regiastrationSchema } from '../schemas/schemas';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppContext } from './auth-provider';
import { updateProfile, User } from 'firebase/auth';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

export default function RegistrationForm() {
  const { setIsOpenReg } = useAppContext();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {register, handleSubmit, formState: { errors }} = useForm<FormValues>({ resolver: yupResolver(regiastrationSchema) });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submit = async (data: RegistrationData) => {
    const displayName = data.name;
    try {
      const user = await registerUser(data.email, data.password);

      if (user) {
        await updateProfile(user, { displayName });

        toast.success('You are successfully registered!');
        handleCloseModal(setIsOpenReg)();
      }

      router.push('/teachers');
    } catch (error) {
      toast.error('Registration error. Please try again!');
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="relative">
        <input
          type="text"
          placeholder="Name"
          className="input h-[54px] mb-[18px]"
          {...register("name")}
        />
        <p className="absolute top-1 left-3 text-xs text-red">
          {errors.name?.message}
        </p>
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          className="input h-[54px] mb-[18px]"
          {...register("email")}
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
          {...register("password")}
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
        type={'submit'}
        className="w-full py-4 rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover mb-5"
      >
        Sign Up
      </Button>
    </form>
  );
}
