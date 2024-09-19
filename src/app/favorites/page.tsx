'use client';

import React, { useEffect, useState } from 'react';
import { useAppContext } from '../components/auth-provider';
import { Teacher } from '../teachers/page';
import { fetchTeachers } from '../../../utils/fetchTeachers';
import TeacherCard from '../components/teacher-card';
import TeachersList from '../components/teachers-list';
import Loader from '../components/loader';
import toast, { Toaster } from 'react-hot-toast';
import { getFavoriteTeachers } from '../../../utils/favorites';
import Link from 'next/link';

export default function FavoritesPage() {
  const { currentUser, favorites, setFavorites } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);

  console.log(favorites);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    setLoading(true);
    const fetchFavoriteTeachers = async () => {
      try {
        const favoriteTeachers = await getFavoriteTeachers(currentUser.uid);

        if (favoriteTeachers) {
          setFavorites(favoriteTeachers);
        }
      } catch (error) {
        toast.error('Something went wrong! Try again');
      }
    };

    fetchFavoriteTeachers();
    setLoading(false);
  }, [currentUser, setFavorites]);

  return (
    <div className="bg-guyabano w-full h-[87vh]">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1184px] py-8 px-16 mx-auto">
          {favorites.length === 0 ? (
            <div className="flex flex-col gap-8 justify-center items-center">
              <p className="text-xl italic font-medium">
                You don&apos;t have favorite teachers yet
              </p>
              <Link
                className="flex gap-2 justify-center items-center text-xl bg-red px-3 py-2 rounded-xl red-button-hover"
                href={'/teachers'}
              >
                <p>Go to the catalog of teachers</p>
                <svg width={14} height={14}>
                  <use href="/icons/icons.svg#icon-arrow-right"></use>
                </svg>
              </Link>
            </div>
          ) : (
            <TeachersList teachers={favorites} />
          )}
        </div>
      )}
      <Toaster />
    </div>
  );
}
