import React from 'react';
import HashtagItem from './hashtag-item';
import Image from 'next/image';
import Button from './button';

export default function TeacherCard() {
  return (
    <div className="relative font-medium leading-normal flex max-w-[1184px] p-6 rounded-3xl bg-white">
      <Button type="button">
        <svg
          className="absolute top-5 right-6 stroke-black fill-none"
          width={26}
          height={26}
        >
          <use href="/icons/icons.svg#icon-heart"></use>
        </svg>
      </Button>
      <Image
        className="inline-block h-[96px] p-2 border-[3px] border-solid border-red rounded-[100px] mr-12"
        src={'/images/bg.jpg'}
        alt="A picture of the teacher"
        width={96}
        height={96}
        property={'true'}
      />
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray">Languages</p>
          <ul className="flex justify-center items-center gap-8 relative mr-16">
            <li className="relative">
              <p className="pseudoelement-right-line">Lessons online</p>
            </li>
            <li className="relative">
              <p className="pseudoelement-right-line">Lessons done: 1432</p>
            </li>
            <li className="relative">
              <p className="flex gap-2 justify-center items-center pseudoelement-right-line">
                <svg width={16} height={16}>
                  <use href="/icons/icons.svg#icon-star"></use>
                </svg>
                Rating: 4.5
              </p>
            </li>
            <li>
              <p>
                Price / 1 hour: <span className="text-green">30$</span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl leading-none mb-8">Name</h3>
          <ul className="mb-4">
            <li className="mb-2">
              <p className="text-gray">
                Speaks:{' '}
                <span className="text-black underline decoration-solid decoration-black">
                  German, French
                </span>
              </p>
            </li>
            <li className="mb-2">
              <p>
                <span className="text-gray">Lesson Info:</span> Lessons are
                structured to cover grammar, vocabulary, and practical usage of
                the language.
              </p>
            </li>
            <li>
              <p>
                <span className="text-gray">Conditions:</span> Welcomes both
                adult learners and teenagers (13 years and above). Provides
                personalized study plans.
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
        <div>
          <HashtagItem>Beginner</HashtagItem>
        </div>
      </div>
    </div>
  );
}
