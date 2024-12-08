export const objectToArray = (array) => {
  const teachers = Object.keys(array)
    .map((key) => ({
      id: key,
      ...array[key],
    }))
    .filter((teacher) => teacher.id && Object.keys(teacher).length > 1);

  return teachers;
};
