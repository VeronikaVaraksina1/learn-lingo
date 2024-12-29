'use client';

import React, { useEffect, useRef, useState } from 'react';
import TeachersList from '../components/teachers-list';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../components/loader';
import { useAuthContext } from '../components/auth-provider';
import { getFavoriteTeachers } from '../../../utils/favorites';
import { useStateContext } from '../components/state-provider';
import LoadMore from '../components/load-more';
import Filters from '../components/filters';

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
  const { currentUser } = useAuthContext();
  const { setFavorites } = useStateContext();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  const userId = currentUser?.uid;
  console.log(userId);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/teachers?page=${page}&limit=4`);
        const data = await response.json();

        if (page === 1) {
          setTeachers(data.teachers);
        } else {
          setTeachers((prevTeachers) => [...prevTeachers, ...data.teachers]);
        }

        setTotalPages(data.totalPages);
      } catch (error) {
        console.log('Error fetching teachers', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [page]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const userToken = await currentUser?.getIdToken();

        if (!userToken) {
          return;
        }

        const response = await fetch('/api/users', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.log('Error fetching favorites', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const loadMoreTeachers = () => {
    setPage(page + 1);
  };

  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       if (userId) {
  //         const favoriteTeachers = await getFavoriteTeachers(userId);
  //         if (favoriteTeachers) {
  //           setFavorites(favoriteTeachers);
  //         }
  //       }
  //     } catch (error) {
  //       toast.error('Something went wrong! Try again');
  //     }
  //   };

  //   fetchFavorites();
  // }, [userId, setFavorites]);

  // useEffect(() => {
  //   if (isLoadMoreClicked && listRef.current) {
  //     listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  //     setIsLoadMoreClicked(false);
  //   }
  // }, [teachers, isLoadMoreClicked]);

  return (
    <div className="bg-guyabano w-full h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1184px] py-8 px-16 mx-auto">
          <Filters onSetLanguage={setLanguage} />
          <TeachersList teachers={teachers} />
          {page < totalPages && teachers.length > 0 && (
            <LoadMore onLoadMore={loadMoreTeachers} isLoading={loading} />
          )}
          <div ref={listRef}></div>
        </div>
      )}

      <Toaster />
    </div>
  );
}
