import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Noise from "@/components/ui/Noise";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arcynith.cloud | Creative Engineer",
  description: "Premium personal portfolio - 3D, 2D Design, Game Dev, AI Engineering, Full Stack, Animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark selection:bg-neutral-800 selection:text-white">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-background text-foreground flex flex-col relative overflow-hidden`}>
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          <Noise />
          {/* Subtle architectural lines */}
          <div className="fixed inset-0 z-0 pointer-events-none flex justify-between px-[20%] opacity-20">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-neutral-800 to-transparent" />
          </div>
          
          <div className="relative z-10 flex flex-col flex-1">
            <Navbar />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
