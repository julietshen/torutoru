import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/layout/AuthProvider";
import Header from "@/components/layout/Header";

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
      <body className={`${nunito.className} bg-primary`}>
        <AuthProvider>
          <div className="flex flex-col items-center min-h-screen">
            <div className="w-full max-w-md bg-secondary text-base-100 flex-grow">
              <Header />
              <main className="p-4">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
