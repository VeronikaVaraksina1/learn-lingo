import Image from 'next/image';

interface TeacherAvatarProps {
  avatarUrl: string;
  name: string;
  surname: string;
}

export default function TeacherAvatar({
  avatarUrl,
  name,
  surname,
}: TeacherAvatarProps) {
  return (
    <div className="relative w-[96px] h-[96px]">
      <Image
        className="inline-block w-[96px] h-[96px] p-2 border-[3px] border-solid border-red rounded-[100px]"
        src={avatarUrl}
        alt={`Teacher ${name} ${surname}`}
        width={96}
        height={96}
        property={'false'}
        quality={100}
      />

      <div className="w-1 h-1 right-0 top-0 absolute bg-green"></div>
    </div>
  );
}
