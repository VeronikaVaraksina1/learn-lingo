import axios from 'axios';

const FIREBASE_URL = 'https://learn-lingo-d7769-default-rtdb.europe-west1.firebasedatabase.app/';

export const getFavoriteTeachers = async (userId) => {
  try {
    const response = await axios.get(`${FIREBASE_URL}/teachers/favorites/${userId}.json`);    
    return response.data || [];

  } catch (error) {
    console.error(error);
  }
};

export const addFavoriteTeacher = async (userId, teacherId) => {
  try {
    const response = await getFavoriteTeachers(userId);
    const favorites = response || [];

    if (!favorites.includes(teacherId)) {
      const updatedFavorites = [...favorites, teacherId];

      const response = await axios.put(`${FIREBASE_URL}/teachers/favorites/${userId}.json`, updatedFavorites);
      return response.data;
    }
    
  } catch (error) {
    console.error('Error adding favorite teacher: ', error);
  }
};

export const removeFavoriteTeacher = async (userId, teacherId) => {
  try {
    const response = await getFavoriteTeachers(userId);
    const favorites = response || [];

    const updatedFavorites = favorites.filter((id) => id !== teacherId);

    const res = await axios.put(`${FIREBASE_URL}/teachers/favorites/${userId}.json`, updatedFavorites);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
