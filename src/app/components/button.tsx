import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={className} type="button">{children}</button>;
}
