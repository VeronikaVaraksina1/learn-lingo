'use client';

import React, { useState } from 'react';
import HashtagItem from './hashtag-item';
import Image from 'next/image';
import Button from './button';
import { Teacher } from '../teachers/page';
import ModalWindow from './modal-window';
import TeacherCardModal from './teacher-card-modal';
import { handleCloseModal, handleOpenModal } from '../../../utils/modalHelpers';
import TeacherDescription from './teacher-description';
import TeacherAvatar from './teacher-avatar';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const { name, surname, levels, avatar_url } = teacher;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative font-medium leading-normal">
      <div className="flex">
        <TeacherAvatar avatar_url={avatar_url} name={name} surname={surname} />
        <div>
          <TeacherDescription teacher={teacher} />
          <Button
            type="button"
            className="underline decoration-solid decoration-black mb-8"
            onClick={handleOpenModal(setIsOpen)}
          >
            Read more
          </Button>
          <ul className="flex gap-2 flex-wrap">
            {levels.map((level, index) => (
              <li key={`${level}-${index}`}>
                <HashtagItem>{level}</HashtagItem>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ModalWindow
        isOpenModal={isOpen}
        onCloseModal={handleCloseModal(setIsOpen)}
      >
        <TeacherCardModal teacher={teacher} />
      </ModalWindow>
    </div>
  );
}
