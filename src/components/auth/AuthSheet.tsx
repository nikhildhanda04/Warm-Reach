"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SocialAuth from "./components/SocialAuth";

interface AuthSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    defaultTab?: "login" | "register";
}

export default function AuthSheet({ open, onOpenChange, defaultTab = "login" }: AuthSheetProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        if (open) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Match transition duration
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [open]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    if (!isVisible && !open) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
                    open ? "opacity-100" : "opacity-0"
                )}
                onClick={() => onOpenChange(false)}
            />

            {/* Sheet Content */}
            <div
                className={cn(
                    "relative z-[100] w-full sm:max-w-md h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col border-l border-gray-100",
                    open ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-6">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors group"
                    >
                        <X className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-8">
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold font-primary text-gray-900 mb-3 tracking-tight">
                            {defaultTab === "login" ? "Welcome back" : "Get started"}
                        </h3>
                        <p className="text-gray-500 font-primary text-lg leading-relaxed">
                            {defaultTab === "login"
                                ? "Sign in to access your saved resumes and history."
                                : "Create an account to start generating personalized emails."}
                        </p>
                    </div>

                    <Tabs defaultValue={defaultTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-gray-100/80 rounded-xl">
                            <TabsTrigger
                                value="login"
                                className="rounded-lg font-medium text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200"
                            >
                                Log In
                            </TabsTrigger>
                            <TabsTrigger
                                value="register"
                                className="rounded-lg font-medium text-gray-600 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm transition-all duration-200"
                            >
                                Sign Up
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="login" className="mt-0">
                            <LoginForm onSuccess={() => onOpenChange(false)} />
                        </TabsContent>

                        <TabsContent value="register" className="mt-0">
                            <RegisterForm onSuccess={() => onOpenChange(false)} />
                        </TabsContent>
                    </Tabs>

                    <SocialAuth />

                    <p className="mt-8 text-center text-xs text-gray-400 font-primary">
                        By continuing, you agree to our{" "}
                        <a href="#" className="underline hover:text-gray-600">Terms of Service</a>{" "}
                        and{" "}
                        <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}
