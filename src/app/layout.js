import { Geist, Geist_Mono } from "next/font/google";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NextFluent | Interactive English Learning Platform",
  description: "Accelerate your career with accredited English courses, adaptive quizzes, and certified assessments.",
  keywords: ["English learning", "NextFluent", "IELTS preparation", "Grammar test", "CEFR assessment"],
};

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col relative bg-white text-slate-900" suppressHydrationWarning>
        <CartProvider>
          {children}
          <FloatingContactButtons />
        </CartProvider>
      </body>
    </html>
  );
}
