'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    if (pathname === '/') {
      body.className = 'bg-white';
    } else if (pathname === '/teachers' || pathname === '/favorites') {
      body.className = 'bg-guyabano';
    }
  }, [pathname]);

  return <>{children}</>;
};
