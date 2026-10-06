import FloatingContactButtons from "@/components/FloatingContactButtons";
import { WishlistProvider } from "@/context/WishlistContext";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "NextFluent | Interactive English Learning Platform",
  description: "Accelerate your career with accredited English courses, adaptive quizzes, and certified assessments.",
  keywords: ["English learning", "NextFluent", "IELTS preparation", "Grammar test", "CEFR assessment"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-sans h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col relative bg-white text-slate-900" suppressHydrationWarning>
        <AuthProvider>
          <WishlistProvider>
            {children}
            <FloatingContactButtons />
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
