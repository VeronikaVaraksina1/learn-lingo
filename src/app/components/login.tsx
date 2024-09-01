import React from 'react';
import Button from './button';
import LoginForm from './login-form';

interface LoginProps {
  onCloseModal: () => void;
}

export default function Login({ onCloseModal }: LoginProps) {
  return (
    <div className="flex flex-col gap-10 relative p-16">
      <Button
        type={'button'}
        onClick={onCloseModal}
        className="absolute top-5 right-5 stroke-black"
      >
        <svg width={32} height={32}>
          <use href="/icons/icons.svg#icon-close"></use>
        </svg>
      </Button>
      <div>
        <h3 className="font-medium text-[40px] leading-tight tracking-tight mb-5">
          Log In
        </h3>
        <p className="max-w-[438px] leading-snug text-text-color-muted">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>

      <LoginForm />
    </div>
  );
}
