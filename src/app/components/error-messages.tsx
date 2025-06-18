interface ErrorMessageProps {
  styles?: string;
  children: React.ReactNode;
}

export const ErrorMessages = ({ styles, children }: ErrorMessageProps) => {
  return (
    <p className={`absolute z-[10] text-[12px] text-error ${styles}`}>
      {children}
    </p>
  );
};
