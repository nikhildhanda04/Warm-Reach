"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import AuthSheet from "@/components/auth/AuthSheet";

export default function FinalCTA() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [showAuthSheet, setShowAuthSheet] = useState(false);

  const handleStartClick = () => {
    if (session) {
      router.push("/generate");
    } else {
      setShowAuthSheet(true);
    }
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-primary">
          Ready to Supercharge Your Outreach?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-primary">
          Join thousands of professionals who are saving time and getting more replies with AI-generated emails.
        </p>
        <button
          onClick={handleStartClick}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 transition-all duration-200 bg-yellow-500 rounded-full hover:bg-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 shadow-lg hover:shadow-yellow-500/25 font-primary"
        >
          Start Generating Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      <AuthSheet
        open={showAuthSheet}
        onOpenChange={setShowAuthSheet}
        defaultTab="register"
      />
    </section>
  );
}

