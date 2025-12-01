"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import AuthSheet from "@/components/auth/AuthSheet";
import { LogOut, User } from "lucide-react";

export default function Navbar() {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const [showAuthSheet, setShowAuthSheet] = useState(false);
    const [authTab, setAuthTab] = useState<"login" | "register">("login");

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/");
                    router.refresh();
                },
            },
        });
    };

    const openAuth = (tab: "login" | "register") => {
        setAuthTab(tab);
        setShowAuthSheet(true);
    };

    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent font-primary">
                            Warm Reach
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        {session ? (
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 font-primary">
                                    <User className="w-4 h-4" />
                                    <span>{session.user.name}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    onClick={handleLogout}
                                    className="font-primary text-gray-600 hover:text-red-600 hover:bg-red-50"
                                >
                                    <LogOut className="w-4 h-4 sm:mr-2" />
                                    <span className="hidden sm:inline">Log out</span>
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={() => openAuth("register")}
                                    className="font-primary bg-yellow-500 hover:bg-yellow-600 text-white shadow-sm hover:shadow-md transition-all"
                                >
                                    Create Account or Login
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <AuthSheet
                open={showAuthSheet}
                onOpenChange={setShowAuthSheet}
                defaultTab={authTab}
            />
        </nav>
    );
}