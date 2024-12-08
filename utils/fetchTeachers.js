import axios from 'axios';
import { objectToArray } from '../utils/objectToArray';

const FIREBASE_URL = 'https://learn-lingo-d7769-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchTeachers = async (lastItemKey = null, limit = 4) => {
  try {
    // Формуємо запит до Firebase
    let url = `${FIREBASE_URL}/teachers/teachers.json?orderBy="$key"&limitToFirst=${limit}`;

    if (lastItemKey) {
      // Якщо це не перше завантаження, додаємо startAfter для пагінації
      url += `&startAfter="${lastItemKey}"`;
    }

    const response = await axios.get(url);
    const teachers = response.data || {};  // Якщо даних нема, повертаємо порожній об'єкт

    // Перетворюємо об'єкт на масив, фільтруючи записи, що містять null або порожні значення
    
    const teachersArray = objectToArray(teachers);
    console.log(teachersArray);  // Логування для перевірки результату

    return teachersArray;  // Повертаємо масив викладачів
  } catch (error) {
    console.error('Error fetching teachers:', error);
    return [];
  }
};