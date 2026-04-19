import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuotesContextProvider } from "@/app/QuotesContext";
import Link from "next/link";
import Navbar from '@/app/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Random Quotes Application",
  description: "Random Quotes Application 130625",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full" suppressHydrationWarning={true}>
        <QuotesContextProvider>
          <Navbar />
          {children}
        </QuotesContextProvider>
      </body>
    </html>
  );
}