import { getDatabase, ref, set } from 'firebase/database';

export const addToFavorites = (userId, teacherId) => {
    const db = getDatabase();
    set(ref(db, `favorites/${userId}/${teacherId}`, true));
};
