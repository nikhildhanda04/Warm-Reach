"use client";

import { useState } from "react";
import { Mail, Mailbox, ArrowRight } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import AuthSheet from "@/components/auth/AuthSheet";

function BackgroundGrids() {
  return (
    <div className="absolute inset-0  overflow-hidden pointer-events-none">
      {/* Top right grid */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]" />

      {/* Bottom left grid */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]" />
    </div>
  );
}

export default function Hero() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [showAuthSheet, setShowAuthSheet] = useState(false);

  const handleGenerateClick = () => {
    if (session) {
      router.push("/generate");
    } else {
      setShowAuthSheet(true);
    }
  };

  return (
    <div className="relative bg-white pt-20 pb-24 overflow-hidden">
      <BackgroundGrids />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            <span className="text-sm font-medium text-yellow-800 font-primary">
              Now with AI-powered personalization
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight font-primary leading-[1.1]">
            Write Cold Emails That <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Actually Convert
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-primary">
            Stop sending generic templates. Generate hyper-personalized cold emails in seconds using AI.
            Upload a resume, paste a job description, and let us do the magic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <button
              onClick={handleGenerateClick}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Generate Your First Email (It&apos;s Free!)
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-600 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 w-full sm:w-auto"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 font-primary animate-fade-in-up delay-300">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-green-100 rounded-full">
                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 bg-green-100 rounded-full">
                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Free forever plan
            </div>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute top-1/2 left-10 hidden lg:block animate-float-slow">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform -rotate-6">
            <Mail className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block animate-float-slower">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 transform rotate-12">
            <Mailbox className="w-8 h-8 text-gray-700" />
          </div>
        </div>
      </div>

      <AuthSheet
        open={showAuthSheet}
        onOpenChange={setShowAuthSheet}
        defaultTab="register"
      />
    </div>
  );
}
