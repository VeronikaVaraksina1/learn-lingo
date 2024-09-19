'use client';

import React, { useState } from 'react';
import Navigation from './navigation';
import Logo from './logo';
import AuthMenu from './auth-menu';
import { useAuthContext } from './auth-provider';
import UserMenu from './user-menu';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const { currentUser } = useAuthContext();

  return (
    <header>
      <div className="flex justify-between items-center max-w-[1184px] h-[88px] px-16 py-5 mx-auto">
        <Logo />
        <Navigation />
        {currentUser ? <UserMenu /> : <AuthMenu /> }
      </div>
      {children}
    </header>
  );
}
