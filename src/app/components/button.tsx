import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return <button onClick={onClick} className={className} type="button">{children}</button>;
}
