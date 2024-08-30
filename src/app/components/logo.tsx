import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="scale-100 hover:scale-110 transition-smooth">
      <Link href={'/'} className="flex gap-2">
        <svg width={28} height={28}>
          <use href="/icons/icons.svg#icon-ukraine"></use>
        </svg>
        <span className="font-medium text-xl tracking-tighter">LearnLingo</span>
      </Link>
    </div>
  );
}
