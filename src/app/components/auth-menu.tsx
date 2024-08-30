'use client'

import React, { useState } from 'react';
import Button from './button';
import ModalWindow from './modal-window';
import Login from './login';

export default function AuthMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center'>
      <Button onClick={openModal} className={'flex gap-2.5 justify-center items-center font-bold leading-tight outline-none stroke-red hover:stroke-black focus:stroke-black transition-smooth'}>
        <svg width={20} height={20}>
          <use href="/icons/icons.svg#icon-log-in"></use>
        </svg>
        <span>Log in</span>
      </Button>
      <Button className={'bg-black text-white font-bold leading-tight rounded-xl px-[39px] py-3.5 hover:bg-text-color-muted focus:bg-text-color-muted transition-smooth'}>Registration</Button>
      <ModalWindow isOpenModal={isOpen} onCloseModal={closeModal}>
        <Login />
      </ModalWindow>
    </div>
  );
}
