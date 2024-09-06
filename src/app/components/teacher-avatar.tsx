import Image from 'next/image'
import React from 'react'

interface TeacherAvatarProps {
    avatar_url: string;
    name: string;
    surname: string;
}

export default function TeacherAvatar({ avatar_url, name, surname }: TeacherAvatarProps) {
  return (
    <Image
    className="inline-block h-[96px] p-2 border-[3px] border-solid border-red rounded-[100px] mr-12"
    src={avatar_url}
    alt={`Teacher ${name} ${surname}`}
    width={96}
    height={96}
    property={'false'}
    quality={100}
  />
  )
}
