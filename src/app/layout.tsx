import type { Metadata } from "next";
import { Playwrite_US_Modern, Roboto_Mono, Inter } from "next/font/google";
import "./globals.css";


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
  title: "Warm Reach - AI Cold Email Generator",
  description: "Generate highly personalized cold emails in seconds using AI. Cross-reference your resume with job descriptions to create the perfect outreach.",
  keywords: ["cold email", "AI email generator", "job application", "networking", "sales outreach", "cover letter generator"],
  openGraph: {
    title: "Warm Reach - AI Cold Email Generator",
    description: "Generate highly personalized cold emails in seconds using AI.",
    type: "website",
    locale: "en_US",
    url: "https://warmreach.com", // Placeholder URL
  },
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
        {children}
      </body>
    </html>
  );
}
