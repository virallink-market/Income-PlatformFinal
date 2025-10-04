import type { Metadata } from 'next';
import './globals.css'; // <-- এখানে পাথ ঠিক করা হয়েছে
import { AuthProvider } from './AuthContext'; // <-- এখানে পাথ ঠিক করা হয়েছে
import React from 'react';

export const metadata: Metadata = {
  title: 'Income Platform',
  description: 'Track your income easily.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
