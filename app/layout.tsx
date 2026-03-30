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
  title: "Harihar Crops - Your Trusted Partner in Modern Agriculture",
  description: "Explore Harihar Crops' premium biostimulants, pesticides, and fertilizers. Dedicated to empowering farmers with high-quality agricultural solutions and innovation.",
  keywords: ["Harihar Crops", "biostimulants", "pesticides", "water soluble fertilizers", "crop science", "farming solutions", "Indian agriculture"],
  authors: [{ name: "Harihar Crops" }],
  openGraph: {
    title: "Harihar Crops - Modern Agricultural Solutions",
    description: "Empowering farmers with premium crop science products and sustainable farming solutions.",
    url: "https://hariharcrops.com",
    siteName: "Harihar Crops",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
