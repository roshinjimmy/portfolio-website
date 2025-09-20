import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Roshin Jimmy - Computer Science Student & Full Stack Developer",
  description: "Passionate Computer Science Engineering student with expertise in full-stack development, machine learning, and AI. Currently pursuing B.Tech at Govt. Model Engineering College.",
  keywords: "Roshin Jimmy, Computer Science, Full Stack Developer, React, Node.js, Python, Machine Learning, AI, Web Development, MEC",
  authors: [{ name: "Roshin Jimmy" }],
  creator: "Roshin Jimmy",
  metadataBase: new URL('https://roshinjimmy.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://roshinjimmy.dev',
    title: 'Roshin Jimmy - Computer Science Student & Full Stack Developer',
    description: 'Passionate Computer Science Engineering student with expertise in full-stack development, machine learning, and AI.',
    siteName: 'Roshin Jimmy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshin Jimmy - Computer Science Student & Full Stack Developer',
    description: 'Passionate Computer Science Engineering student with expertise in full-stack development, machine learning, and AI.',
    creator: '@roshinjimmy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
