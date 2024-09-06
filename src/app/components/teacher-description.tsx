import React from 'react';
import Button from './button';
import { Teacher } from '../teachers/page';

interface TeacherDescriptionProps {
  teacher: Teacher;
}

export default function TeacherDescription({ teacher }: TeacherDescriptionProps) {
  const { name, surname, languages, rating, price_per_hour, lessons_done, lesson_info, conditions } = teacher;

  return (
    <div className="w-full mb-4 font-medium leading-normal">
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray">Languages</p>
        <ul className="flex justify-center items-center gap-8">
          <li className="relative">
            <div className="flex justify-center items-center gap-2 pseudoelement-right-line">
            <svg className="stroke-black fill-none" width={16} height={16}>
            <use href="/icons/icons.svg#icon-book"></use>
          </svg>
              <span>Lessons online</span></div>
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
        <Button type="button">
          <svg className="stroke-black fill-none" width={26} height={26}>
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
  );
}
