import React from 'react';
import HashtagItem from './hashtag-item';

export default function TeacherCard() {
  return (
    <div className="p-6 rounded-3xl bg-white">
      <p>avatar</p>
      <div className="flex">
        <p>Languages</p>
        <p>Lessons online</p>
        <p>Lessons done: 1432</p>
        <p>Rating: 4.5</p>
        <p>Price / 1 hour: 30$</p>
        <button type="button">Heart</button>
      </div>
      <div>
        <h3 className='font-medium text-2xl leading-none mb-8'>Name</h3>
        <ul className='font-medium leading-normal mb-4'>
          <li className='mb-2'>
            <p>Speaks: <span className='decoration-1 decoration-solid decoration-red'>German, French</span></p>
          </li>
          <li className='mb-2'>
            <p>
              Lesson Info: Lessons are structured to cover grammar, vocabulary,
              and practical usage of the language.
            </p>
          </li>
          <li>
            <p>
              Conditions: Welcomes both adult learners and teenagers (13 years
              and above). Provides personalized study plans.
            </p>
          </li>
        </ul>

        <button type="button">Read more</button>
      </div>
      <div>
        <HashtagItem>Beginner</HashtagItem>
      </div>
    </div>
  );
}
