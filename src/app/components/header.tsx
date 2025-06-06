'use client';

import React, { useMemo } from 'react';
import Navigation from './navigation';
import Logo from './logo';
import AuthMenu from './auth-menu';
import { useAuthContext } from './auth-provider';
import UserMenu from './user-menu';
import MobileMenu from './mobile-menu';
import Button from './button';
import { useStateContext } from './state-provider';
import ModalWindow from './modal-window';
import { handleCloseModal, handleOpenModal } from '../../../utils/modalHelpers';

export default function Header() {
  const { currentUser } = useAuthContext();
  const { isOpenMenu, setIsOpenMenu } = useStateContext();

  const menu = useMemo(() => {
    return currentUser ? <UserMenu /> : <AuthMenu />;
  }, [currentUser]);

  return (
    <>
      <header className="relative">
        <div className="lg:hidden fixed z-[9999] flex justify-between items-center w-full p-6 bg-[rgba(255,255,255,0.9)]">
          <Logo />
          <Button
            type="button"
            className="fill-black mobile-button-hover py-2 px-3"
            onClick={() => handleOpenModal(setIsOpenMenu)()}
          >
            <svg width={24} height={24}>
              <use href="/icons/icons.svg#icon-open-menu"></use>
            </svg>
          </Button>
        </div>
        <div className="sm:hidden md:hidden lg:block fixed z-[100] w-full">
          <div className="max-w-[1184px] h-[88px] px-16 py-5 mx-auto">
            <div className="flex justify-between items-center bg-[rgba(255,255,255,0.9)] rounded-[10px] p-[10px]">
              <Logo />
              <Navigation />
              {menu}
            </div>
          </div>
        </div>
      </header>

      <ModalWindow
        isOpenModal={isOpenMenu}
        onCloseModal={handleCloseModal(setIsOpenMenu)}
      >
        <MobileMenu />
      </ModalWindow>
    </>
  );
}
