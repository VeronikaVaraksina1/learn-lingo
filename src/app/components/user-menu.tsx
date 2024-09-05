'use client';

import React from 'react';
import { useAuth } from './auth-provider';
import Button from './button';
import { logout } from '../../../utils/auth';

export default function UserMenu() {
  const { currentUser } = useAuth();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <p className="font-medium italic text-red">
        {currentUser ? `Hello, ${currentUser.displayName}!` : null}
      </p>
      <Button
        type={'button'}
        onClick={() => logout()}
        className={
          'flex gap-2.5 justify-center items-center font-bold leading-tight outline-none stroke-red hover:stroke-black focus:stroke-black transition-smooth'
        }
      >
        <svg width={20} height={20}>
          <use href="/icons/icons.svg#icon-log-in"></use>
        </svg>
        <span>Log out</span>
      </Button>
    </div>
  );
}
