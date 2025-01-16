'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useAuthContext } from './auth-provider';
import { useStateContext } from './state-provider';

export default function Navigation() {
  const { currentUser } = useAuthContext();
  const { setIsOpenMenu } = useStateContext();
  const pathname = usePathname();

  return (
    <ul className="flex flex-col justify-center items-center gap-8 lg:flex-row lg:gap-7">
      <li className="nav-link">
        <Link
          href={'/'}
          onClick={() => {
            setIsOpenMenu(false);
          }}
          className={pathname === '/' ? 'active-link' : ''}
        >
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link
          href={'/teachers'}
          onClick={() => {
            setIsOpenMenu(false);
          }}
          className={pathname === '/teachers' ? 'active-link' : ''}
        >
          Teachers
        </Link>
      </li>
      {currentUser && (
        <li className="nav-link">
          <Link
            href={'/favorites'}
            onClick={() => {
              setIsOpenMenu(false);
            }}
            className={pathname === '/favorites' ? 'active-link' : ''}
          >
            Favorites
          </Link>
        </li>
      )}
    </ul>
  );
}
