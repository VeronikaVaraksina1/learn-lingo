'use client';

import React, { useEffect, useState } from 'react';
import TeacherCard from './teacher-card';
import { Teacher } from '../teachers/page';

interface TeachersListProps {
  teachers: Teacher[];
}

export default function TeachersList({ teachers }: TeachersListProps) {
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  useEffect(() => {
    setFilteredTeachers(teachers);
  }, [teachers]);

  // const filterTeachers = () => {
  //   return filteredTeachers.filter((teacher) => {
  //     const language = 
  //   })
  // }

  return (
    <ul className='flex flex-col gap-8'>
      {filteredTeachers.map((teacher) => (
        <li className="max-w-[1184px] p-6 rounded-3xl bg-white" key={`${teacher.lessons_done}-${teacher.name}-${teacher.surname}`}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}
