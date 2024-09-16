'use client';

import React, { useEffect, useState } from 'react';
import TeacherCard from './teacher-card';
import { Teacher } from '../teachers/page';
import { useAppContext } from './auth-provider';

interface TeachersListProps {
  teachers: Teacher[];
}

export default function TeachersList({ teachers }: TeachersListProps) {
  const { favorites, setFavorites } = useAppContext(); 
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  // useEffect(() => {
  //   const favoriteTeachers = localStorage.getItem('favoriteTeachersLearnLingo');
  //   setFavorites(favoriteTeachers);
  //   setFilteredTeachers(teachers);
  // }, [teachers]);

  // const filterTeachers = () => {
  // return filteredTeachers.filter((teacher) => ())
  // }

  return (
    <ul className='flex flex-col gap-8'>
      {Object.values(teachers).map((teacher) => (
        <li className="max-w-[1184px] p-6 rounded-3xl bg-white" key={`${teacher.lessons_done}-${teacher.name}-${teacher.surname}`}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}
