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
    <div className="relative w-28">
      <Image
        className="inline-block w-[96px] h-[96px] p-2 border-[3px] border-solid border-red rounded-[100px]"
        src={avatarUrl}
        alt={`Teacher ${name} ${surname}`}
        width={96}
        height={96}
        quality={100}
        priority
      />

      <div className="w-2 h-2 absolute top-4 mdMax:right-[34px] lg:right-4 bg-green border-2 border-white rounded-full"></div>
    </div>
  );
}
