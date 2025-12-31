// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Rich Hudson - Web Developer",
//   description: "Let's make your site soar",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >

//         {/* Global Fixed Video Background */}
//         <div className="fixed inset-0 -z-10">
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover"
//             poster="/assets/img/thanks-bg.webp"
//           >
//             <source src="/assets/img/hero-bg-vid.mp4" type="video/mp4" />
//           </video>
//         </div>

//         {/* Dark Gradient Overlay */}
//         <div className="fixed inset-0 -z-10 bg-linear-to-br from-black/80 via-black/60 to-black/40 pointer-events-none" />

//         <Header />
        
//         <div className="flex-1 relative z-0">
//           {children}
//         </div>

//         <Footer />

//       </body>
//     </html>
//   );
// }



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
  title: {
    default: "Rich Hudson - Web Developer",
    template: "%s | Rich Hudson",
  },
  description: "Fast, modern websites for New Hampshire businesses. Built and supported locally in Wolfeboro.",
  keywords: ["web developer", "Wolfeboro NH", "Next.js developer", "performance websites", "local web design"],
  authors: [{ name: "Rich Hudson" }],
  creator: "Rich Hudson",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richhudson.net",
    siteName: "Rich Hudson - Web Developer",
    title: "Rich Hudson - Web Developer",
    description: "Fast, modern websites for New Hampshire businesses. Built and supported locally in Wolfeboro.",
    images: [
      {
        url: "/assets/img/original-gangsta.webp",
        width: 1200,
        height: 630,
        alt: "Rich Hudson portfolio - high-performance Next.js website",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Rich Hudson - Web Developer",
    description: "Fast, modern websites for New Hampshire businesses. Built and supported locally in Wolfeboro.",
    images: ["/assets/img/original-gangsta.webp"],
    creator: "@rhudson4966", // optional - add if you have one
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

        <Header />
        <div className="flex-1 relative z-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}