import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../src/app/firebaseConfig';
import { handleAuthError } from './handleAuthError';
import toast from 'react-hot-toast';

export const register = async (email, password, displayName) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credential.user;

    await updateProfile(user, { displayName });
    return user;
  } catch (error) {
    handleAuthError(error); 
  }
};

export const login = async (email, password) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;
    return user;
  } catch (error) {
    handleAuthError(error);    
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    handleAuthError(error); 
  }
};