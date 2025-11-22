"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import AuthPanel from "../auth/auth-panel";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
    const [authPanelOpen, setAuthPanelOpen] = useState(false);
    const [authTab, setAuthTab] = useState<"login" | "signup">("login");
    const { user, logout } = useAuth();

    const handleLoginClick = () => {
        setAuthTab("login");
        setAuthPanelOpen(true);
    };

    const handleSignupClick = () => {
        setAuthTab("signup");
        setAuthPanelOpen(true);
    };

    return(
        <>
        <div className="flex flex-row w-full justify-between bg-white/[0.3] backdrop-blur-md z-99 fixed tracking-tight px-24 py-6">

            <div className="flex flex-row gap-4">
                <Link href="/" className="font-logo tracking-tigher text-2xl hover:opacity-80 transition-opacity">
                    warm reach
                </Link>
            </div>

            <div className="flex flex-row gap-6 text-base font-primary items-center">
                {user ? (
                    <>
                        <div className="flex items-center gap-2 text-gray-700">
                            <User className="w-4 h-4" />
                            <span className="font-medium">{user.name}</span>
                        </div>
                        <Link 
                            href="/generate"
                            className="px-6 py-2 border border-dark hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transtion-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)] dark:border-light font-medium rounded-full"
                        >
                            Generate
                        </Link>
                        <button
                            onClick={logout}
                            className="px-6 py-2 bg-yellow-500 hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transtion-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)] text-light font-medium rounded-full flex items-center gap-2"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleLoginClick}
                            className="px-6 py-2 border border-dark hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transtion-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)] dark:border-light font-medium rounded-full"
                        >
                            Log in
                        </button>
                        <button
                            onClick={handleSignupClick}
                            className="px-6 py-2 bg-yellow-500 hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transtion-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)] text-light font-medium rounded-full"
                        >
                            Register
                        </button>
                    </>
                )}
            </div>

        </div>
        <AuthPanel 
            isOpen={authPanelOpen} 
            onClose={() => setAuthPanelOpen(false)}
            initialTab={authTab}
        />
        </>
    )
}