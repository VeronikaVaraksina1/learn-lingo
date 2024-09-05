'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-7">
      <li className="relative leading-tight pseudoelement-bottom-line">
        <Link href={'/'} className={pathname === '/' ? 'active-link' : ''}>
          Home
        </Link>
      </li>
      <li className="relative leading-tight pseudoelement-bottom-line">
        <Link href={'/teachers'} className={pathname === '/teachers' ? 'active-link' : ''}>Teachers</Link>
      </li>
    </ul>
  );
}
