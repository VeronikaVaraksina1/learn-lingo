import React from 'react';
import TeacherCard from './teacher-card';
import { Teacher } from '../teachers/page';

interface TeachersListProps {
  teachers: Teacher[];
}

export default function TeachersList({ teachers }: TeachersListProps) {
  return (
    <ul className='flex flex-col gap-8'>
      {teachers.map((teacher) => (
        <li key={`${teacher.lessons_done}-${teacher.name}-${teacher.surname}`}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </ul>
  );
}
