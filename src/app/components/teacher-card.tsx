'use client';

import React, { useEffect, useState } from 'react';
import { Teacher } from '../teachers/page';
import Button from './button';
import Review from './review';
import HashtagItem from './hashtag-item';
import ModalWindow from './modal-window';
import Login from './login';
import Image from 'next/image';
import { useStateContext } from './state-provider';
import { addFavoriteTeacher, removeFavoriteTeacher } from '../../../utils/favorites';
import { handleCloseModal, handleOpenModal } from '../../../utils/modalHelpers';
import { useAuthContext } from './auth-provider';
import clsx from 'clsx';
import toast from 'react-hot-toast';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const { id, name, surname, levels, avatar_url, reviews, languages, rating, price_per_hour, lessons_done, lesson_info, conditions, experience } = teacher;
  const { currentUser } = useAuthContext();
  const { favorites, setFavorites, isOpenReg } = useStateContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const userId = currentUser?.uid;
  const teacherId = teacher.id;

  useEffect(() => {
    if (favorites && userId) {
      const isFavoriteTeacher = favorites.some((item) => item.id === id);
      setIsFavorite(isFavoriteTeacher);
    }
  }, [id, favorites, userId]);

  const handleAddToFavorite = async () => {
    if (!currentUser) {      
      handleOpenModal(setIsOpenModal)();
    } else {

      if (!userId && teacherId !== null && teacherId !== undefined) {
        toast.error('User ID or Teacher ID is undefined');
        return;
      }

      try {
        const isTeacherFavorite = favorites.some((item) => item.id === id);

        if (!isTeacherFavorite) {
          const updated = await addFavoriteTeacher(userId, teacher);
          setFavorites(updated);
          setIsFavorite(true);
          toast.success('Added to "Favorites"');
        } else {
          const response = await removeFavoriteTeacher(userId, teacherId);
          setFavorites(response);
          setIsFavorite(false);
          toast.success('Removed from "Favorites"');
        }
      } catch (error) {
        toast.error('Something went wrong! Try again');
      }
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
                <svg
                  className={clsx(
                    isFavorite
                      ? 'stroke-red, fill-light-red'
                      : 'stroke-black fill-none hover:fill-light-red hover:stroke-red transition-smooth'
                  )}
                  width={26}
                  height={26}
                >
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
            <p className="font-normal mb-8">{experience}</p>
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

      <ModalWindow isOpenModal={isOpenModal} onCloseModal={handleCloseModal(setIsOpenModal)}>
        <Login onCloseModal={handleCloseModal(setIsOpenModal)} isOpenReg={isOpenReg} />
      </ModalWindow>
    </div>
  );
}
