import axios from 'axios';
import { objectToArray } from '../utils/objectToArray';

const FIREBASE_URL = 'https://learn-lingo-d7769-default-rtdb.europe-west1.firebasedatabase.app/';

export const fetchTeachersByLanguages = async (language) => {
  try {
    const URL = `${FIREBASE_URL}/teachers.json?orderBy="languages"&equalTo="${language}"`;
    const response = axios.get(URL);
    const teachers = response.data || {};

    const teachersArray = objectToArray(teachers);

    return teachersArray;
  } catch (error) {
    return [];
  }
};
