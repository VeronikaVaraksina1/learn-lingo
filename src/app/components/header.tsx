import React from 'react';
import Navigation from './navigation';
import Logo from './logo';
import AuthMenu from './auth-menu';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header>
      <div className="py-5">
        <Logo />
        <Navigation />
        <AuthMenu />
      </div>
      {children}
    </header>
  );
}
