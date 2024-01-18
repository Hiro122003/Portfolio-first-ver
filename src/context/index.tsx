'use client';

import Spinner from '@/app/components/spinner';
import { useSession } from 'next-auth/react';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';


type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
};

export const GlobalContentxt = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session } = useSession();

  if(session === undefined) return <Spinner/>


  return (
    <GlobalContentxt.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContentxt.Provider>
  );
}
