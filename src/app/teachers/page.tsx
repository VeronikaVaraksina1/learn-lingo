'use client';

import React, { useEffect, useRef, useState } from 'react';
import { fetchTeachers } from '../../../utils/fetchTeachers';
import { fetchTeachersByLanguages } from '../../../utils/filtration';
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
  const [lastItemKey, setLastItemKey] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isLoadMoreClicked, setIsLoadMoreClicked] = useState(false);

  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');

  const userId = currentUser?.uid;
  const listRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchTeachersByLanguages(language);
  //       setTeachers(response);
  //     } catch (error) {
  //       return [];
  //     }
  //   }

  //   fetchData();
  // }, [language])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const result = await fetchTeachers();
        const key = result[result.length - 1].id;

        setTeachers(result);
        setLastItemKey(key);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const loadMoreTeachers = async () => {
    try {
      setLoading(true);
      setIsLoadMoreClicked(true);

      const newTeachers = await fetchTeachers(lastItemKey);

      if (newTeachers.length > 0) {
        const key = newTeachers[newTeachers.length - 1].id;

        setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
        setLastItemKey(key);

        if (newTeachers.length < 4) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }

        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    if (isLoadMoreClicked && listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
      setIsLoadMoreClicked(false);
    }
  }, [teachers, isLoadMoreClicked]);

  return (
    <div className="bg-guyabano w-full h-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1184px] py-8 px-16 mx-auto">
          <Filters onSetLanguage={setLanguage} />
          <TeachersList teachers={teachers} />
          {hasMore ? <LoadMore onLoadMore={loadMoreTeachers} /> : null}
          <div ref={listRef}></div>
        </div>
      )}

      <Toaster />
    </div>
  );
}
