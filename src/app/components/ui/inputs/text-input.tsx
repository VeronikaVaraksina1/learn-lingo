import React from 'react';
import { ErrorMessages } from '../../error-messages';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  errorMessage?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, placeholder, errorMessage, ...rest }: TextInputProps, _ref) => {
    return (
      <div className="relative">
        <input
          className="input max-w-[438px] h-[54px]"
          ref={_ref}
          placeholder={placeholder}
          {...rest}
        />
        {errorMessage && (
          <ErrorMessages styles="top-0 left-[10px]">
            {errorMessage}
          </ErrorMessages>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
