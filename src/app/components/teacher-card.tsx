'use client';

import React, { useState } from 'react';
import { Teacher } from '../teachers/page';
import Button from './button';
import Review from './review';
import HashtagItem from './hashtag-item';
import Image from 'next/image';
import clsx from 'clsx';
import { useAppContext } from './auth-provider';
import { addFavoriteTeacher, getFavoriteTeachers } from '../../../utils/favorites';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const { name, surname, levels, avatar_url, reviews, languages, rating, price_per_hour, lessons_done, lesson_info, conditions, experience } = teacher;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { favorites, setFavorites, currentUser } = useAppContext(); 

  const fetchFavorites = async (id) => {
    const userId = id; // Змініть на актуальний userId
    try {
      const favorites = await getFavoriteTeachers(userId);
      console.log('Favorite teachers:', favorites);
      // Тут можна працювати з отриманими даними
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleAddToFavorite = async () => {
    console.log(currentUser?.uid); // інформація про поточного користувача з Firebase, включаючи uid
    console.log(teacher.id); // id вчителя

    const userId = currentUser?.uid;
    const teacherId = teacher.id;

    // try {
    //   fetchFavorites(userId)
    // } catch (error) {
    //   console.log(error);
    // }

    if (!userId || !teacherId) {
      console.error('User ID or Teacher ID is undefined');
      return;
    }

    try {
      await addFavoriteTeacher(userId, teacherId);
      console.log('Succes');
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative font-medium leading-normal">
      <div className="flex">
        <Image
          className="inline-block h-[96px] p-2 border-[3px] border-solid border-red rounded-[100px] mr-12"
          src={avatar_url}
          alt={`Teacher ${name} ${surname}`}
          width={96}
          height={96}
          property={'false'}
          quality={100}
        />
        <div>
          <div className="w-full mb-4 font-medium leading-normal">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray">Languages</p>
              <ul className="flex justify-center items-center gap-8">
                <li className="relative">
                  <div className="flex justify-center items-center gap-2 pseudoelement-right-line">
                    <svg
                      className="stroke-black fill-none"
                      width={16}
                      height={16}
                    >
                      <use href="/icons/icons.svg#icon-book"></use>
                    </svg>
                    <span>Lessons online</span>
                  </div>
                </li>
                <li className="relative">
                  <p className="pseudoelement-right-line">
                    Lessons done: {lessons_done}
                  </p>
                </li>
                <li className="relative">
                  <p className="flex gap-2 justify-center items-center pseudoelement-right-line">
                    <svg width={16} height={16}>
                      <use href="/icons/icons.svg#icon-star"></use>
                    </svg>
                    Rating: {rating}
                  </p>
                </li>
                <li>
                  <p>
                    Price / 1 hour:{' '}
                    <span className="text-green">{`${price_per_hour}$`}</span>
                  </p>
                </li>
              </ul>
              <Button type="button" onClick={handleAddToFavorite}>
                <svg className={clsx(favorites ? 'stroke-red, fill-light-red' : 'stroke-black fill-none hover:fill-light-red hover:stroke-red transition-smooth')} width={26} height={26}>
                  <use href="/icons/icons.svg#icon-heart"></use>
                </svg>
              </Button>
            </div>
            <div>
              <h3 className="text-2xl leading-none mb-8">{`${name} ${surname}`}</h3>
              <ul className="mb-4 w-[864px]">
                <li className="mb-2">
                  <div className="flex">
                    <p className="text-gray">Speaks:&nbsp;</p>
                    <p className="text-black underline decoration-solid decoration-black">
                      {languages.join(', ')}
                    </p>
                  </div>
                </li>
                <li className="mb-2">
                  <p>
                    <span className="text-gray">Lesson Info:&nbsp;</span>
                    {lesson_info}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="text-gray">Conditions:&nbsp;</span>
                    {conditions}
                  </p>
                </li>
              </ul>
              <p className="font-normal mb-8">{experience}</p>
            </div>
          </div>
          <Button
            type="button"
            className="underline decoration-solid decoration-black mb-8"
            onClick={handleToggle}
          >
            <p>{isOpen ? 'Read less' : 'Read more'}</p>
          </Button>

          <div className={clsx(isOpen ? 'block' : 'hidden')}>
            <ul>
              {reviews.map((review, index) => (
                <li key={`${review.reviewer_name}-${index}`}>
                  <Review review={review} />
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex gap-2 flex-wrap">
            {levels.map((level, index) => (
              <li key={`${level}-${index}`}>
                <HashtagItem>{level}</HashtagItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
