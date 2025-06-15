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
    <html lang="en">
      <body className={`${nunito.className} bg-primary`}>
        <AuthProvider>
          <div className="flex flex-col items-center min-h-screen p-4 sm:p-8">
            <div className="w-full max-w-md md:max-w-2xl lg:max-w-4xl bg-secondary text-base-100 flex-grow rounded-2xl shadow-2xl overflow-hidden">
              <Header />
              <main className="p-4 sm:p-6">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
