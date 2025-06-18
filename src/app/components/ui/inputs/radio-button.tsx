import React from 'react';

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, name, value, ...rest }: RadioButtonProps, _ref) => {
    return (
      <div>
        <label className="flex items-center leading-5">
          <input
            className="w-[22px] h-[22px] mr-2"
            type="radio"
            name={name}
            value={value}
            {...rest}
          />
          <p>{label}</p>
        </label>
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';
