'use client';

import Link from 'next/link';
import { useAuth } from './AuthContext'; // <-- এখানে পাথ ঠিক করা হয়েছে
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebaseConfig'; // <-- এখানে পাথ ঠিক করা হয়েছে

const Home = () => {
  const { currentUser } = useAuth();
  const auth = getAuth(app);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout Failed:', error);
    }
  };

  if (!currentUser) {
    return (
      <div>
        <h1>Welcome</h1>
        <p>You are not logged in.</p>
        <Link href="/login">Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {currentUser.email}</h1>
      <p>You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add your main content here */}
    </div>
  );
};

export default Home;
