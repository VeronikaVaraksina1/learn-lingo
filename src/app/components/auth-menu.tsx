import React from 'react';
import Button from './button';

export default function AuthMenu() {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <Button className={'flex gap-2.5 justify-center items-center font-bold leading-tight stroke-red hover:stroke-black focus:stroke-black transition-smooth'}>
        <svg width={20} height={20}>
          <use href="/icons/icons.svg#icon-log-in"></use>
        </svg>
        <span>Log in</span>
      </Button>
      <Button className={'bg-black text-white font-bold leading-tight rounded-xl px-[39px] py-3.5 hover:bg-text-color-muted focus:bg-text-color-muted transition-smooth'}>Registration</Button>
    </div>
  );
}
