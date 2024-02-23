import { UserProvider } from '@auth0/nextjs-auth0/client';

// RootLayout component serves as the top-level layout component for the application
export default function RootLayout({ children }) {
  return (
    // HTML document structure with lang attribute set to "en"
    <html lang="en">
      {/* UserProvider component from Auth0 Next.js SDK wraps the application content to provide user authentication context */}
      <UserProvider>
        {/* Body of the HTML document with flexbox layout centered both vertically and horizontally */}
        <body className="h-screen w-full flex items-center justify-center">
          {/* Render the child components passed to RootLayout */}
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
