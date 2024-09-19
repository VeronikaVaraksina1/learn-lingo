'use client';

import React, { useEffect, useState } from 'react';
import { useAppContext } from '../components/auth-provider';
import { Teacher } from '../teachers/page';
import { fetchTeachers } from '../../../utils/fetchTeachers';
import TeacherCard from '../components/teacher-card';
import TeachersList from '../components/teachers-list';
import Loader from '../components/loader';
import { Toaster } from 'react-hot-toast';
import { getFavoriteTeachers, getFavoriteTeachersById } from '../../../utils/favorites';

export default function FavoritesPage() {
  const { currentUser } = useAppContext();
  const [favoriteTeachers, setFavoriteTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchFavoriteTeachers = async () => {
      if (!currentUser) {
        return;
      }

      const favoriteTeachers = await getFavoriteTeachers(currentUser.uid);
      
      const teachersPromises = favoriteTeachers.map((id: number) => getFavoriteTeachersById(id));
      const teachers = await Promise.all(teachersPromises);

      setFavoriteTeachers(teachers.filter(Boolean));
    };

    fetchFavoriteTeachers();
    setLoading(false);
  }, [currentUser]);

  return (
    <div className="bg-guyabano w-full h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1184px] py-8 px-16 mx-auto">
          <TeachersList teachers={favoriteTeachers} />
        </div>
      )}
      <Toaster />
    </div>
  );
}
