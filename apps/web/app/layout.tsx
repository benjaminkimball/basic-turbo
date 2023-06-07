import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "@basic-turbo/web",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" dir="ltr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
