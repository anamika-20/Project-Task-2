
import { Inter } from "next/font/google";


import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className=" h-screen w-full flex items-center justify-center">{children}</body>
      </UserProvider>
    </html>
  );
}