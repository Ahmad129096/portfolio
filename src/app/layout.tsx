import TopLeftImg from "@/components/TopLeftImg";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { Sora } from "next/font/google";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ahmad Hassan",
  description: "Mern stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`page bg-primary/100 text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
