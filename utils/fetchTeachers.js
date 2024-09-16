import axios from 'axios';

const FIREBASE_URL = 'https://learn-lingo-d7769-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchTeachers = async () => {
  try {
    const response = await axios.get(`${FIREBASE_URL}/teachers.json`);
    return response.data.teachers;
    
  } catch (error) {
    console.error("Failed to fetch teachers:", error);
    return null;
  }
};
