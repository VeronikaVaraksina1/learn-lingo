'use client';

import { usePathname } from 'next/navigation';
import { HTMLAttributes, useEffect } from 'react';

interface LayoutWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children, ...rest }: LayoutWrapperProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    if (pathname === '/') {
      body.className = 'bg-white';
    } else if (pathname === '/teachers' || pathname === '/favorites') {
      body.className = 'bg-guyabano';
    }
  }, [pathname]);

  return <div {...rest}>{children}</div>;
};
