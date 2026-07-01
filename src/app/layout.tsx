import TopLeftImg from "@/components/TopLeftImg";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahmad Hassan",
  description: "Full-stack developer crafting polished digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`page bg-background text-text ${headingFont.variable} ${bodyFont.variable}`}
      >
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
