import { Teacher } from '../teachers/page';
import TeacherCard from './teacher-card';

interface TeachersListProps {
  teachers: Teacher[];
}

export default function TeachersList({ teachers }: TeachersListProps) {
  return (
    <>
      <ul className="flex flex-col gap-8">
        {teachers.map((teacher, index) => (
          <li className="max-w-[1184px] p-6 rounded-3xl bg-white" key={index}>
            <TeacherCard teacher={teacher} />
          </li>
        ))}
      </ul>
    </>
  );
}

// `${teacher.id}-${teacher.name}-${teacher.surname}`