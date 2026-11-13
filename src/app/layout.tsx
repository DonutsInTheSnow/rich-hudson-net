import Script from 'next/script';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreconnectLinks from '@/components/PreconnectLinks';
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
  title: {
    default: "Rich Hudson | Software & Web Developer | New Hampshire",
    template: "%s | Rich Hudson",
  },
  description: "Software & Web Developer based in New Hampshire with 8+ years of experience building websites and applications using JavaScript, React, Next.js, Node.js, and WordPress.",
  authors: [{ name: "Rich Hudson" }],
  creator: "Rich Hudson",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richhudson.net",
    siteName: "Rich Hudson | Software & Web Developer | New Hampshire",
    title: "Rich Hudson - Website Handyman for New Hampshire Businesses",
    description: "Software & Web Developer based in New Hampshire with 8+ years of experience building websites and applications using JavaScript, React, Next.js, Node.js, and WordPress.",
    images: [
      {
        url: "/assets/img/original-gangsta.webp",
        width: 1200,
        height: 630,
        alt: "Rich Hudson | Software & Web Developer | New Hampshire",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Rich Hudson | Software & Web Developer | New Hampshire",
    description: "Software & Web Developer based in New Hampshire with 8+ years of experience building websites and applications using JavaScript, React, Next.js, Node.js, and WordPress.",
    images: ["/assets/img/original-gangsta.webp"],
    creator: "@rhudson4966",
  },

  // Favicon & Icons
  icons: {
    icon: "/favicon.ico",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Background Video & Overlay */}
        <div className="fixed inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/img/thanks-bg.webp"
          >
            <source src="/assets/img/hero-bg-vid.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fixed inset-0 -z-10 bg-linear-to-br from-black/80 via-black/60 to-black/40 pointer-events-none" />

        <PreconnectLinks />
        <Header />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SYX1ZSWC48"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SYX1ZSWC48');
          `}
        </Script>

        <div className="flex-1 relative z-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}