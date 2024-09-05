'use client';

import React, { useState } from 'react';
import Navigation from './navigation';
import Logo from './logo';
import AuthMenu from './auth-menu';
import { useAuth } from './auth-provider';
import UserMenu from './user-menu';

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const { currentUser } = useAuth();

  return (
    <header>
      <div className="flex justify-between items-center px-16 py-5">
        <Logo />
        <Navigation />
        {currentUser ? <UserMenu /> : <AuthMenu /> }
      </div>
      {children}
    </header>
  );
}
