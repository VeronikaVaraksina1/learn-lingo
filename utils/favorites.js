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

export const addFavoriteTeacher = async (userId, teacher) => {  
  try {
    const favorites = await getFavoriteTeachers(userId);
    const isAlreadyFavorite = favorites.some(item => item.id === teacher.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, teacher];

      const result = await axios.put(`${FIREBASE_URL}/teachers/favorites/${userId}.json`, updatedFavorites);
      return result.data;
    }
    
  } catch (error) {
    console.error('Error adding favorite teacher: ', error);
  }
};

export const removeFavoriteTeacher = async (userId, teacherId) => {
  try {
    const favorites = await getFavoriteTeachers(userId);

    const updatedFavorites = favorites.filter((item) => item.id !== teacherId);

    const result = await axios.put(`${FIREBASE_URL}/teachers/favorites/${userId}.json`, updatedFavorites);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

export const getFavoriteTeachersById = async (teacherId) => {
  try {
    const response = await axios.get(`${FIREBASE_URL}/teachers/teachers/${teacherId}.json`);
    return response.data;

  } catch (error) {
    console.error(error);
  }
}
