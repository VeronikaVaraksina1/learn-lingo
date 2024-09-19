'use client';

import React, { useEffect, useState } from 'react';
import { fetchTeachers } from '../../../utils/fetchTeachers';
import TeachersList from '../components/teachers-list';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../components/loader';
import { useAppContext } from '../components/auth-provider';
import { getFavoriteTeachers } from '../../../utils/favorites';

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Teacher {
  id: number;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: Review[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string;
}

export default function TeachersPage() {
  const { currentUser, setFavorites } = useAppContext();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const userId = currentUser?.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchTeachers();
        setTeachers(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
    <div className="bg-guyabano w-full h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1184px] py-8 px-16 mx-auto">
          <TeachersList teachers={teachers} />
        </div>
      )}
      <Toaster />
    </div>
  );
}
