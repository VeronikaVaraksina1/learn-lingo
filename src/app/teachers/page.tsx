'use client';

import React, { useEffect, useRef, useState } from 'react';
import TeachersList from '../components/teachers-list';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../components/auth-provider';
import { useStateContext } from '../components/state-provider';
import LoadMore from '../components/load-more';

export interface ReviewArray {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Teacher {
  id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: ReviewArray[];
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
        toast.error('Something went wrong! Try again');
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [page]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userToken = await currentUser?.getIdToken(true);

        if (!userToken) {
          return;
        }

        const response = await fetch('/api/users/favorites', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setFavorites(data.favorites);
      } catch (error) {
        toast.error('Something went wrong! Try again');
      }
    };

    fetchFavorites();
  }, [currentUser, setFavorites]);

  const loadMoreTeachers = () => {
    setPage(page + 1);
  };

  return (
    <div className="bg-guyabano w-full h-full pb-[88px]">
      <div className="max-w-[1312px] py-7 px-2 md:py-8 md:px-16 mx-auto">
        <TeachersList teachers={teachers} />
        {page < totalPages && teachers.length > 0 && (
          <div className="mt-8">
            <LoadMore onLoadMore={loadMoreTeachers} isLoading={loading} />
          </div>
        )}
      </div>
      <Toaster
        containerStyle={{
          zIndex: 99999,
        }}
        reverseOrder={true}
      />
    </div>
  );
}
