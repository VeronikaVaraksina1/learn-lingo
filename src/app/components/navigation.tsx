'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useAppContext } from './auth-provider';

export default function Navigation() {
  const { currentUser } = useAppContext();
  const pathname = usePathname();

  return (
    <ul className="flex gap-7">
      <li className="relative leading-tight pseudoelement-bottom-line">
        <Link href={'/'} className={pathname === '/' ? 'active-link' : ''}>
          Home
        </Link>
      </li>
      <li className="relative leading-tight pseudoelement-bottom-line">
        <Link
          href={'/teachers'}
          className={pathname === '/teachers' ? 'active-link' : ''}
        >
          Teachers
        </Link>
      </li>
      {currentUser ? (
        <li className="relative leading-tight pseudoelement-bottom-line">
          <Link
            href={'/favorites'}
            className={pathname === '/favorites' ? 'active-link' : ''}
          >
            Favorites
          </Link>
        </li>
      ) : null}
    </ul>
  );
}
