'use client';

import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebaseConfig';

interface AuthContextType {
  currentUser: User | null;
  isOpenLog: boolean;
  setIsOpenLog: (isOpen: boolean) => void;
  isOpenReg: boolean;
  setIsOpenReg: (isOpen: boolean) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isOpenLog, setIsOpenLog] = useState(false);
  const [isOpenReg, setIsOpenReg] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsub();
  }, []);

  return  (
    <AuthContext.Provider value={{ currentUser, isOpenLog, setIsOpenLog, isOpenReg, setIsOpenReg }}>
      {children}
    </AuthContext.Provider>
  )
}

// Хук для доступу до контексту
export const useAppContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AuthProvider');
  }
  return context;
};