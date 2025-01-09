'use client';

import { useState } from 'react';
import Button from './button';
import Review from './review';
import clsx from 'clsx';
import { ReviewArray } from '../teachers/page';
import HashtagItem from './hashtag-item';

interface TeacherReviewProps {
  experience: string;
  reviews: ReviewArray[];
  levels: string[];
}

export default function TeacherReview({
  experience,
  reviews,
  levels,
}: TeacherReviewProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(typeof experience);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
    </>
  );
}
