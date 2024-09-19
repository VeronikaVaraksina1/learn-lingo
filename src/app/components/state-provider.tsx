'use client'

import { createContext, useContext, useState } from 'react';
import { Teacher } from '../teachers/page';

interface StateContextType {
  favorites: Teacher[];
  setFavorites: (favorites: Teacher[]) => void;
  isOpenLog: boolean;
  setIsOpenLog: (isOpen: boolean) => void;
  isOpenReg: boolean;
  setIsOpenReg: (isOpen: boolean) => void;
}

interface StateProviderProps {
  children: React.ReactNode;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export default function StateProvider({ children }: StateProviderProps) {
  const [favorites, setFavorites] = useState<Teacher[]>([]);
  const [isOpenLog, setIsOpenLog] = useState<boolean>(false);
  const [isOpenReg, setIsOpenReg] = useState<boolean>(false);

  return (
    <StateContext.Provider value={{ favorites, setFavorites, isOpenLog, setIsOpenLog, isOpenReg, setIsOpenReg }}>
      {children}
    </StateContext.Provider>
  )
}

// Хук для доступу до контексту
export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext  must be used within an StateProvider');
  }
  return context;
};
