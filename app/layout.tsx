import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/public/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionProvider from '@/app/SessionProvider'

export const metadata: Metadata = {
  title: "temple website",
  description: "Designed and developed by Gauresh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= ''
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
