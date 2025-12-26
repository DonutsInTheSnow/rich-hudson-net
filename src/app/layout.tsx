import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rich Hudson - Web Developer",
  description: "Let's make your site soar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* Global Fixed Video Background */}
        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/img/aynRand.webp"
          >
            <source src="/assets/img/hero-bg-vid.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Gradient Overlay */}
        <div className="fixed inset-0 -z-10 bg-linear-to-br from-black/80 via-black/60 to-black/40 pointer-events-none" />

        <Header />
        
        <div className="flex-1 relative z-0">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}