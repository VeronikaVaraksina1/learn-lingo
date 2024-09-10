import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../src/app/firebaseConfig';
import { handleAuthError } from './handleAuthError';

export const registerUser = async (email, password) => {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    return user;
    
  } catch (error) {
    handleAuthError(error); 
    console.log(error);
    
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