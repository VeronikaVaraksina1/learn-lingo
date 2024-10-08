import React from 'react';
import Button from './button';
import RegistrationForm from './registration-form';
import { handleCloseModal, handleOpenModal } from '../../../utils/modalHelpers';
import ModalWindow from './modal-window';
import Login from './login';
import { useStateContext } from './state-provider';

interface RegistrationProps {
  onCloseModal: () => void;
  isOpenLog: boolean;
}

export default function Registration({ onCloseModal, isOpenLog }: RegistrationProps) {
  const { isOpenReg, setIsOpenLog, setIsOpenReg } = useStateContext();
  return (
    <div className="flex flex-col relative p-16">
      <Button type={'button'} onClick={onCloseModal} className="absolute top-5 right-5 stroke-black">
        <svg width={32} height={32}>
          <use href="/icons/icons.svg#icon-close"></use>
        </svg>
      </Button>
      <div className='mb-10'>
        <h3 className="font-medium text-[40px] leading-tight tracking-tight mb-5">Registration</h3>
        <p className="max-w-[438px] leading-snug text-text-color-muted">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following information.
        </p>
      </div>

      <RegistrationForm />

      <div className="flex gap-4 text-sm">
        <p className="text-text-color-muted">Have an account?</p>
        <Button
          type={'button'}
          className={'underline decoration-solid decoration-black'}
          onClick={() => {
            handleCloseModal(setIsOpenReg)();
            setTimeout(() => {
              handleOpenModal(setIsOpenLog)();
            }, 200);
          }}
        >
          Login
        </Button>
      </div>

      <ModalWindow
        isOpenModal={isOpenLog}
        onCloseModal={handleCloseModal(setIsOpenLog)}
      >
        <Login isOpenReg={isOpenReg} onCloseModal={handleCloseModal(setIsOpenLog)} />
      </ModalWindow>
    </div>
  );
}
