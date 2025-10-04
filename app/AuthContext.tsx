'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig'; // <-- এখানে পাথ ঠিক করা হয়েছে
import firebaseConfig from '../firebaseConfig'; // <-- এখানে পাথ ঠিক করা হয়েছে

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

    const contextValue: AuthContextType = {
        currentUser: user,
        loading,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
