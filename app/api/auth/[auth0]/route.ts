// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';
// Define route handler for authentication endpoint using handleAuth from Auth0 Next.js SDK
export const GET = handleAuth();
