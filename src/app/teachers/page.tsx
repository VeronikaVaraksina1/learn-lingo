'use client';

import React, { useEffect, useState } from 'react';
import { fetchTeachers } from '../../../utils/fetchTeachers';
import TeachersList from '../components/teachers-list';

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Teacher {
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
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTeachers();
        setTeachers(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);  

  return (
    <div className="bg-guyabano w-full h-full">
      <div className="max-w-[1184px] py-8 px-16 mx-auto">
        <TeachersList teachers={teachers} />
      </div>
    </div>
  );
}
