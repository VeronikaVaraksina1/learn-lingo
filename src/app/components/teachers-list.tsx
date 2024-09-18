'use client';

import { Teacher } from '../teachers/page';
import TeacherCard from './teacher-card';
import React, { useEffect, useState } from 'react';
import { getFavoriteTeachers } from '../../../utils/favorites';
import { useAppContext } from './auth-provider';
import toast from 'react-hot-toast';

interface TeachersListProps {
  teachers: Teacher[];
}

export default function TeachersList({ teachers }: TeachersListProps) {
  const { currentUser, setFavorites } = useAppContext(); 
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);

  const userId = currentUser?.uid;

  useEffect(() => {
    const fetchFavorites = async () => {      
      try {
        if (userId) {
          const favoriteTeachers = await getFavoriteTeachers(userId);
          if (favoriteTeachers) {
            setFavorites(favoriteTeachers);
          }
        }
      } catch (error) {
        toast.error('Something went wrong! Try again');
      }
    };

    fetchFavorites();
  }, [userId, setFavorites]);

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
