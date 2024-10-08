'use client';

import React, { useState } from 'react';
import CustomSelect from './custom-select';

export default function Filters() {
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  const languageOptions = [
    { value: 'fra', label: 'French' },
    { value: 'eng', label: 'English' },
    { value: 'ger', label: 'German' },
    { value: 'ukr', label: 'Ukrainian' },
    { value: 'pol', label: 'Polish' },
  ];

  const levelOptions = [
    { value: 'A1', label: 'A1 Beginner' },
    { value: 'A2', label: 'A2 Elementary' },
    { value: 'B1', label: 'B1 Intermediate' },
    { value: 'B2', label: 'B2 Upper-Intermediate' },
    { value: 'C1', label: 'C1 Advanced' },
    { value: 'C2', label: 'C2 Proficient' },
  ];

  const priceOptions = [
    { value: '10', label: '10$' },
    { value: '20', label: '20$' },
    { value: '30', label: '30$' },
    { value: '40', label: '40$' },
  ];

  return (
    <div className="flex gap-5 mb-8">
      <CustomSelect label="Languages" options={languageOptions} placeholder={'Language'} width='221px' />
      <CustomSelect label="Level of knowledge" options={levelOptions} placeholder={'Level'} width='198px' />
      <CustomSelect label="Price" options={priceOptions} placeholder={'Price'} width='124px' />
    </div>
  );
}
