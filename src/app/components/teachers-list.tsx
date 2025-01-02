import { Teacher } from '../teachers/page';
import TeacherCard from './teacher-card';

interface TeachersListProps {
  teachers: Teacher[];
  onToggleFavorite: (teacherId: string) => void;
}

export default function TeachersList({
  teachers,
  onToggleFavorite,
}: TeachersListProps) {
  console.log('onToggleFavorite in TeachersList:', onToggleFavorite);

  return (
    <ul className="flex flex-col gap-8">
      {teachers.map((teacher) => (
        <li
          className="max-w-[1184px] p-6 rounded-3xl bg-white"
          key={teacher.id}
        >
          <TeacherCard teacher={teacher} onToggleFavorite={onToggleFavorite} />
        </li>
      ))}
    </ul>
  );
}

// `${teacher.id}-${teacher.name}-${teacher.surname}`
