import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/lib/constants";

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
    template: `%s - ${siteConfig.title}`,
    default: siteConfig.defaultTitle,
  },
  description: siteConfig.description,
  authors: [{ name: "Hanspen", url: "https://hanspen.vercel.app" }],
  publisher: "Hanspen",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: {
      template: `%s - ${siteConfig.title}`,
      default: siteConfig.defaultTitle,
    },
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 600,
        alt: siteConfig.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
