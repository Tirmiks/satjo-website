import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/ui/main/Header";



export const metadata: Metadata = {
  title: "Satjo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={``}
    >
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
