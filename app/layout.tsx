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

const BASE_URL = "https://hariharcropscience.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Harihar Crop Science | Agriculture Products India | Pesticides & Fertilizers",
  description: "Harihar Crop Science, founded by Mahendra Gurjar, is a leading manufacturer of pesticides, fertilizers, and biostimulants in India. Providing modern farming solutions for better crop yields.",
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "pSttccYz2ts0qDd5vQU8l2ioSPBZBlYHDPjbuBPSsLw",
  },
  openGraph: {
    title: "Harihar Crop Science - Modern Agricultural Solutions",
    description: "Empowering farmers with premium crop science products and sustainable farming solutions.",
    url: BASE_URL,
    siteName: "Harihar Crop Science",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
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
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Harihar Crop Science",
              "url": "https://hariharcropscience.in",
              "logo": "https://hariharcropscience.in/logo.jpeg",
              "founder": {
                "@type": "Person",
                "name": "Mahendra Gurjar"
              },
              "brand": {
                "@type": "Brand",
                "name": "Harihar Crop Science"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "7773031120",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gujarat Manufacturing Unit",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380001",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/hariharcropscience/",
                "https://hariharcropscience.in"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
