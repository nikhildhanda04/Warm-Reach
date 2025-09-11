import type { Metadata } from "next";
import { Anton, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"]
});

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
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
        className={`${dmsans.variable} ${fraunces.variable} ${anton.variable} antialiased bg-light dark:bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}
