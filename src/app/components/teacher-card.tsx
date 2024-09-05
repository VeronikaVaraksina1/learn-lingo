import React from 'react';
import HashtagItem from './hashtag-item';
import Image from 'next/image';
import Button from './button';
import { Teacher } from '../teachers/page';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  return (
    <div className="relative font-medium leading-normal flex max-w-[1184px] p-6 rounded-3xl bg-white">
      <Image
        className="inline-block h-[96px] p-2 border-[3px] border-solid border-red rounded-[100px] mr-12"
        src={avatar_url}
        alt="A picture of the teacher"
        width={96}
        height={96}
        property={'true'}
      />
      <div className="w-full mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray">Languages</p>
          <ul className="flex justify-center items-center gap-8 relative">
            <li className="relative">
              <p className="pseudoelement-right-line">Lessons online</p>
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
                Price / 1 hour: <span className="text-green">30$</span>
              </p>
            </li>
          </ul>
          <Button type="button">
            <svg
              className="stroke-black fill-none"
              width={26}
              height={26}
            >
              <use href="/icons/icons.svg#icon-heart"></use>
            </svg>
          </Button>
        </div>
        <div>
          <h3 className="text-2xl leading-none mb-8">{`${name} ${surname}`}</h3>
          <ul className="mb-4">
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
          <Button
            type="button"
            className="underline decoration-solid decoration-black mb-8"
          >
            Read more
          </Button>
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
  );
}
