'use client';

import { useUser } from "@auth0/nextjs-auth0/client";
import "./globals.css"
import { useRouter } from "next/navigation";

export default function Home() {
    const { user, error, isLoading } = useUser();
    const router = useRouter();

    console.log(user)

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl">
                {user ? (
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div>
                            Name <span className="font-bold">{user.name}</span>
                        </div>
                        <div>
                            Email <span className="font-bold">{user.email}</span>
                        </div>
                        <div>
                            Session ID <span className="font-bold">{user.sid}</span>
                        </div>
                        
                        <button 
                            onClick={() => {router.push("/api/auth/logout")}}
                            className="bg-red-400 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition">
                                Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="font-bold">
                            Please log in
                        </div>
                        <button 
                            onClick={() => {router.push("/api/auth/login")}}
                            className="bg-green-400 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition">
                                Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
