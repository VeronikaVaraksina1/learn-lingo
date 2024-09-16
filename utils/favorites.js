import { get, getDatabase, ref, set } from 'firebase/database';

export const addFavoriteTeacher = async (userId, teacherId) => {
  const db = getDatabase();
  const favoriteRef = ref(db, `favorites/${userId}/${teacherId}/1`);

  try {
    await set(favoriteRef, true); // Записуємо значення true за ключем teacherId
    console.log('Teacher added to favorites!');
  } catch (error) {
    console.error('Error adding favorite teacher: ', error);
  }
};

export const getFavoriteTeachers = async (userId) => {
  const db = getDatabase();
  const favoriteRef = ref(db, `favorites/${userId}`);

  try {
    const snapshot = await get(favoriteRef);
    if (snapshot.exists()) {
      return snapshot.val(); // Повертає об'єкт з улюбленими вчителями
    } else {
      console.log('No favorite teachers found');
      return null; // Немає улюблених вчителів для цього користувача
    }
  } catch (error) {
    console.error('Error getting favorite teachers: ', error);
    throw error; // Можна обробити помилку у виклику функції
  }
};
