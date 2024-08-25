import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="bg-red font-bold text-lg leading-[1.56em] max-w-[267px] py-4 px-[88px] rounded-xl hover:bg-light-red focus:bg-light-red transition-smooth"
      type="button"
    >
      {children}
    </button>
  );
}
