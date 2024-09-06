import React from 'react';
import { Teacher } from '../teachers/page';
import TeacherDescription from './teacher-description';
import TeacherAvatar from './teacher-avatar';
import HashtagItem from './hashtag-item';

interface TeacherCardModalProps {
  teacher: Teacher;
}

export default function TeacherCardModal({ teacher }: TeacherCardModalProps) {
  const { avatar_url, name, surname, levels, reviews, experience } = teacher;
  return (
    <div className="flex p-6 rounded-3xl bg-white">
      <TeacherAvatar avatar_url={avatar_url} name={name} surname={surname} />
      <div>
        <TeacherDescription teacher={teacher} />
        <p className='mb-8'>{experience}</p>
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
