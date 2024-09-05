import axios from 'axios';

const FIREBASE_URL = 'https://learn-lingo-d7769-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchTeachers = async () => {
  try {
    const response = await axios.get(`${FIREBASE_URL}.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
