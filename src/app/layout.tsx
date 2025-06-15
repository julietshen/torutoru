import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/layout/AuthProvider";
import Navbar from "@/components/layout/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Torutoru - Learn Gujarati",
  description: "Learn Gujarati for family, for love, for connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="torutoru">
      <body className={`${nunito.className} bg-secondary text-secondary-content`}>
        <AuthProvider>
          <Navbar />
          <main className="max-w-4xl mx-auto p-4 sm:p-6">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
