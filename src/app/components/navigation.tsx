'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useAuthContext } from './auth-provider';

export default function Navigation() {
  const { currentUser } = useAuthContext();
  const pathname = usePathname();

  return (
    <ul className="flex gap-7">
      <li className="nav-link">
        <Link href={'/'} className={pathname === '/' ? 'active-link' : ''}>
          Home
        </Link>
      </li>
      <li className="nav-link">
        <Link
          href={'/teachers'}
          className={pathname === '/teachers' ? 'active-link' : ''}
        >
          Teachers
        </Link>
      </li>
      {currentUser && (
        <li className="nav-link">
          <Link
            href={'/favorites'}
            className={pathname === '/favorites' ? 'active-link' : ''}
          >
            Favorites
          </Link>
        </li>
      )}
    </ul>
  );
}
