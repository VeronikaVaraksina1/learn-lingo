import React from 'react';
import Button from './button';

export interface RegistrationProps {
  onCloseModal: () => void;
}

export default function Registration({ onCloseModal }: RegistrationProps) {
  return (
    <div className="flex flex-col gap-10 relative p-16">
      <Button type={'button'} onClick={onCloseModal} className="absolute top-5 right-5 stroke-black">
        <svg width={32} height={32}>
          <use href="/icons/icons.svg#icon-close"></use>
        </svg>
      </Button>
      <div>
        <h3 className="font-medium text-[40px] leading-tight tracking-tight mb-5">Registration</h3>
        <p className="max-w-[438px] leading-snug text-text-color-muted">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following information.
        </p>
      </div>
      <Button
        type={'submit'}
        className="w-full py-4 rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover"
      >
        Sign Up
      </Button>
    </div>
  );
}
