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
  title: {
    default: "Harihar Crop Science | Agriculture Products India | Pesticides, Biostimulants & Fertilizers",
    template: "%s | Harihar Crop Science",
  },
  description:
    "Harihar Crop Science, founded by Mahendra Gurjar, is a leading agriculture products manufacturer in India. We specialize in biostimulants, pesticides, fungicides, and water-soluble fertilizers designed for Indian farmers. Headquartered in Gujarat.",
  keywords: [
    "Harihar Crop Science",
    "Mahendra Gurjar",
    "agriculture products India",
    "pesticides manufacturer India",
    "biostimulants company India",
    "fertilizers India",
    "fungicides India",
    "water soluble fertilizers",
    "crop science Gujarat",
    "farming solutions India",
    "Indian agriculture company",
    "agricultural chemicals India",
    "krishi vigyan",
    "kisan products India",
    "harihar crop science founder",
    "harihar crop science owner",
  ],
  authors: [{ name: "Mahendra Gurjar", url: BASE_URL }],
  creator: "Mahendra Gurjar",
  publisher: "Harihar Crop Science",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "pSttccYz2ts0qDd5vQU8l2ioSPBZBlYHDPjbuBPSsLw",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Harihar Crop Science",
    title: "Harihar Crop Science | Biostimulants, Pesticides & Fertilizers India",
    description:
      "Harihar Crop Science, founded by Mahendra Gurjar, manufactures premium biostimulants, pesticides, and fertilizers for Indian farmers. Based in Gujarat, India.",
    images: [
      {
        url: `${BASE_URL}/logo.jpeg`,
        width: 800,
        height: 600,
        alt: "Harihar Crop Science Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harihar Crop Science | Biostimulants, Pesticides & Fertilizers India",
    description:
      "Harihar Crop Science, founded by Mahendra Gurjar, manufactures premium biostimulants, pesticides, and fertilizers for Indian farmers.",
    images: [`${BASE_URL}/logo.jpeg`],
  },
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
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

// Combined Organization + LocalBusiness JSON-LD Schema
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Harihar Crop Science",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.jpeg`,
        width: 300,
        height: 300,
      },
      founder: {
        "@type": "Person",
        name: "Mahendra Gurjar",
        jobTitle: "Founder & Managing Director",
        worksFor: {
          "@type": "Organization",
          name: "Harihar Crop Science",
        },
      },
      brand: {
        "@type": "Brand",
        name: "Harihar Crop Science",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9630712105",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gujarat Manufacturing Unit",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/hariharcropscience/",
        BASE_URL,
      ],
      description:
        "Harihar Crop Science is a leading Indian agriculture company founded by Mahendra Gurjar, specializing in biostimulants, pesticides, fungicides, and fertilizers for Indian farmers.",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Harihar Crop Science",
      image: `${BASE_URL}/logo.jpeg`,
      url: BASE_URL,
      telephone: "+91-9630712105",
      email: "hariharcropscience@gmail.com",
      priceRange: "₹₹",
      founder: {
        "@type": "Person",
        name: "Mahendra Gurjar",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gujarat Manufacturing Unit",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0225,
        longitude: 72.5714,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [
        "https://www.instagram.com/hariharcropscience/",
        BASE_URL,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Harihar Crop Science",
      description: "Official website of Harihar Crop Science - Biostimulants, Pesticides & Fertilizers for Indian Farmers",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/products?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      name: "Mahendra Gurjar",
      jobTitle: "Founder & Managing Director",
      url: `${BASE_URL}/about`,
      worksFor: {
        "@type": "Organization",
        name: "Harihar Crop Science",
        url: BASE_URL,
      },
      knowsAbout: [
        "Agriculture",
        "Biostimulants",
        "Pesticides",
        "Crop Science",
        "Indian Farming",
        "Fertilizers",
      ],
      sameAs: [
        "https://www.instagram.com/hariharcropscience/",
      ],
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </body>
    </html>
  );
}
