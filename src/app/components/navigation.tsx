import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <ul className="flex gap-7">
      <li className="relative leading-tight pseudoelement-bottom-line">
        <Link href={'/'}>
          Home
        </Link>
      </li>
      <li className="relative leading-tight pseudoelement-bottom-line">
        <Link href={'/teachers'}>Teachers</Link>
      </li>
    </ul>
  );
}
