'use client';

import React, { useState } from 'react';
import Button from './button';
import LoginForm from './login-form';
import { handleCloseModal, handleOpenModal } from '../../../utils/modalHelpers';
import ModalWindow from './modal-window';
import Registration from './registration';

interface LoginProps {
  setIsOpenLog: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
  isOpenReg: boolean;
  setIsOpenReg: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({
  setIsOpenLog,
  onCloseModal,
  isOpenReg,
  setIsOpenReg,
}: LoginProps) {
  return (
    <div className="flex flex-col relative p-16">
      <Button
        type={'button'}
        onClick={onCloseModal}
        className="absolute top-5 right-5 stroke-black"
      >
        <svg width={32} height={32}>
          <use href="/icons/icons.svg#icon-close"></use>
        </svg>
      </Button>
      <div className="mb-10">
        <h3 className="font-medium text-[40px] leading-tight tracking-tight mb-5">
          Log In
        </h3>
        <p className="max-w-[438px] leading-snug text-text-color-muted">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>

      <LoginForm />

      <div className="flex gap-6 text-sm">
        <p className="text-text-color-muted">{"Don't have an account?"}</p>
        <Button
          type={'button'}
          className={'underline decoration-solid decoration-black'}
          onClick={() => {
            handleCloseModal(setIsOpenLog)();
            setTimeout(() => {
              handleOpenModal(setIsOpenReg)();
            }, 200);
          }}
        >
          Registration
        </Button>
      </div>

      <ModalWindow
        isOpenModal={isOpenReg}
        onCloseModal={handleCloseModal(setIsOpenReg)}
      >
        <Registration onCloseModal={handleCloseModal(setIsOpenReg)} />
      </ModalWindow>
    </div>
  );
}
