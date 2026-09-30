import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ProductDetailClient from "./ProductDetailClient";
import { 
  products, 
  getProductByIdOrSlug, 
  parseProductDetails 
} from "@/lib/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

const BASE_URL = "https://hariharcropscience.in";

// 1. Next.js 16 Static Site Generation for sub-second loading
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// 2. Dynamic SEO & Social Sharing Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductByIdOrSlug(id);

  if (!product) {
    return {
      title: "Product Not Found | Harihar Crop Science",
      description: "The requested agricultural formulation could not be found.",
    };
  }

  const specs = parseProductDetails(product);
  const title = `${product.name} (${specs.technicalName}) | Harihar Crop Science`;
  const description = `${product.name}: ${specs.technicalName}. Recommended for ${specs.crops.slice(0, 3).join(", ")}. Targets: ${specs.targetPests.slice(0, 3).join(", ")}. Genuine formulation by Harihar Crop Science.`;
  const canonicalUrl = `${BASE_URL}/products/${product.id}`;
  const fullImageUrl = product.image.startsWith("http")
    ? product.image
    : `${BASE_URL}${product.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} | Harihar Crop Science`,
      description,
      url: canonicalUrl,
      siteName: "Harihar Crop Science",
      images: [
        {
          url: fullImageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Harihar Crop Science`,
      description,
      images: [fullImageUrl],
    },
  };
}

// 3. Page Component
export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductByIdOrSlug(id);

  if (!product) {
    notFound();
  }

  const specs = parseProductDetails(product);

  // Fetch 3 related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Schema.org Product JSON-LD for rich Google search result previews
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `${BASE_URL}${product.image}`,
    "description": product.description,
    "sku": product.id,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "Harihar Crop Science"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Harihar Crop Science",
      "url": BASE_URL,
      "telephone": "+91 96309 71205"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Harihar Crop Science"
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 font-sans selection:bg-primary/30 selection:text-primary">
      {/* Background Noise Texture */}
      <div className="fixed inset-0 noise z-[1] pointer-events-none" />

      {/* Structured Schema.org Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-grow">
        <ProductDetailClient
          product={product}
          specs={specs}
          relatedProducts={relatedProducts}
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
