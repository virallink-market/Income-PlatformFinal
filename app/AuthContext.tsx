'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebaseConfig'; 
import { User } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null | undefined;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  
  const value: AuthContextType = {
    currentUser: user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
