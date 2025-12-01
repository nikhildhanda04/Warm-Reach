"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
    onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await authClient.signIn.email({
                email,
                password,
            }, {
                onSuccess: () => {
                    onSuccess();
                    router.refresh();
                },
                onError: (ctx) => {
                    setError(ctx.error.message);
                }
            });
        } catch {
            setError("An unexpected error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="login-email" className="text-sm font-medium text-gray-700 ml-1">Email</Label>
                <Input
                    id="login-email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 px-4 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-200 font-primary"
                />
            </div>
            <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                    <Label htmlFor="login-password" className="text-sm font-medium text-gray-700">Password</Label>
                    <button type="button" className="text-xs font-medium text-yellow-600 hover:text-yellow-700">
                        Forgot password?
                    </button>
                </div>
                <Input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 px-4 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all duration-200 font-primary"
                />
            </div>
            {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-sm text-red-600 font-primary">
                    {error}
                </div>
            )}
            <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium text-base shadow-lg shadow-gray-900/10 transition-all duration-200 hover:-translate-y-0.5"
                disabled={isLoading}
            >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
            </Button>
        </form>
    );
}
