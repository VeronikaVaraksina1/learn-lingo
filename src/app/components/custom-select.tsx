import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: OptionType[];
  placeholder: string;
  width: string;
}

export default function CustomSelect({ label, options, placeholder, width }: SelectProps) {
  const customStyles: StylesConfig<OptionType, false> = {
    container: (provided) => ({
      ...provided,
    }),
    control: (provided) => ({
      ...provided,
      width: width,
      padding: '5px 8px',
      border: '1px solid transparent',
      borderRadius: '14px',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #8a8a89'
      }
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
      borderRadius: '14px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#f2c0bd' : '#fff',
      color: '#333',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '500',
    }),
  };

  return (
    <label>
      <p className="text-sm text-gray font-medium mb-2">{label}</p>
      <Select options={options} placeholder={placeholder} styles={customStyles} />
    </label>
  );
}
