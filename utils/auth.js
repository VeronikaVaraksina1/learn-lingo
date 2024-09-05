import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../src/app/firebaseConfig';

export const register = async (email, password, displayName) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credential.user;

    await updateProfile(user, { displayName })
    console.log("User created", user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;
    console.log("User logined", user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.log(error);
  }
};