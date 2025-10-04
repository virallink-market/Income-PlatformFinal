'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext'; 
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../firebaseConfig'; // সঠিক পাথ

const Home = () => {
  const { currentUser } = useAuth();
  const auth = getAuth(app); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Income Tracker</h1>
        
        {currentUser ? (
          <div className="text-center">
            <p className="text-lg text-green-600 mb-4">You are currently logged in as: {currentUser.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-red-500 mb-6">You are currently logged out.</p>
            <Link href="/login" legacyBehavior>
              <a className="w-full inline-block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
                Go to Login Page
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
