import React from 'react';
import Filters from '../components/filters';
import TeacherCard from '../components/teacher-card';

export default function TeachersPage() {
  return (
    <div className='bg-guyabano w-full h-full py-8 px-16'>
      <Filters />
      <TeacherCard />
    </div>
  );
}
