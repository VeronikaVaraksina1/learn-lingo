'use client';

import React, { useMemo } from 'react';
import Navigation from './navigation';
import Logo from './logo';
import AuthMenu from './auth-menu';
import { useAuthContext } from './auth-provider';
import UserMenu from './user-menu';

export default function Header() {
  const { currentUser } = useAuthContext();

  const menu = useMemo(() => {
    return currentUser ? <UserMenu /> : <AuthMenu />;
  }, [currentUser]);

  return (
    <header>
      <div className="sm:hidden md:hidden lg:block">
        <div className="flex justify-between items-center max-w-[1184px] h-[88px] px-16 py-5 mx-auto">
          <Logo />
          <Navigation />
          {menu}
        </div>
      </div>
    </header>
  );
}
