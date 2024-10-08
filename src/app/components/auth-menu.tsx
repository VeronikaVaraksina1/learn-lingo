'use client'

import React, { useState } from 'react';
import Button from './button';
import ModalWindow from './modal-window';
import Login from './login';
import Registration from './registration';
import { handleCloseModal, handleOpenModal } from '../../../utils/modalHelpers';
import { useStateContext } from './state-provider';

export default function AuthMenu() {
  const {isOpenLog, setIsOpenLog, isOpenReg, setIsOpenReg } = useStateContext();

  return (
    <div className='flex flex-wrap gap-4 justify-center items-center'>
      <Button type={"button"} onClick={handleOpenModal(setIsOpenLog)} className={'flex gap-2.5 justify-center items-center font-bold leading-tight outline-none stroke-red hover:stroke-black focus:stroke-black transition-smooth'}>
        <svg width={20} height={20}>
          <use href="/icons/icons.svg#icon-log-in"></use>
        </svg>
        <span>Log in</span>
      </Button>
      <Button type={"button"} onClick={handleOpenModal(setIsOpenReg)} className={'bg-black text-white font-bold leading-tight rounded-xl px-[39px] py-3.5 hover:bg-text-color-muted focus:bg-text-color-muted transition-smooth'}>Registration</Button>
      
      <ModalWindow isOpenModal={isOpenLog} onCloseModal={handleCloseModal(setIsOpenLog)}>
        <Login onCloseModal={handleCloseModal(setIsOpenLog)} isOpenReg={isOpenReg} />
      </ModalWindow>

      <ModalWindow isOpenModal={isOpenReg} onCloseModal={handleCloseModal(setIsOpenReg)}>
        <Registration isOpenLog={isOpenLog} onCloseModal={handleCloseModal(setIsOpenReg)} />
      </ModalWindow>
    </div>
  );
}
