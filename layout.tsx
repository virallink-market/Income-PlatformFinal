import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../context/AuthContext'; 

export const metadata: Metadata = {
  title: 'Income Platform',
  description: 'Track your income easily',
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
