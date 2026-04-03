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
  title: "Harihar Crop Science - Your Trusted Partner in Modern Agriculture",
  description: "Explore Harihar Crop Science's premium biostimulants, pesticides, and fertilizers. Dedicated to empowering farmers with high-quality agricultural solutions and innovation.",
  keywords: ["Harihar Crop Science", "biostimulants", "pesticides", "water soluble fertilizers", "crop science", "farming solutions", "Indian agriculture"],
  verification: {
    google: "pSttccYz2ts0qDd5vQU8l2ioSPBZBlYHDPjbuBPSsLw",
  },
  openGraph: {
    title: "Harihar Crop Science - Modern Agricultural Solutions",
    description: "Empowering farmers with premium crop science products and sustainable farming solutions.",
    url: "https://hariharcropscience.in",
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
              "@type": "LocalBusiness",
              "name": "Harihar Crop Science",
              "image": "https://hariharcropscience.in/logo.jpeg",
              "@id": "https://hariharcropscience.in",
              "url": "https://hariharcropscience.in",
              "telephone": "+91963071205",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gujarat Manufacturing Unit",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.0225,
                "longitude": 72.5714
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/hariharcropscience/",
                "https://hariharcropscience.in"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
