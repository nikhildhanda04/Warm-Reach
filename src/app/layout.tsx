import type { Metadata } from "next";
import { Playwrite_US_Modern, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

const playwrite = Playwrite_US_Modern({
  variable: "--font-playwrite",
  weight: ["400"]
});

const robotomono = Roboto_Mono({
  variable: "--font-robotomono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warm Reach",
  description: "A free AI cold email generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotomono.variable} ${inter.variable} ${playwrite.variable} antialiased bg-light dark:bg-dark`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
