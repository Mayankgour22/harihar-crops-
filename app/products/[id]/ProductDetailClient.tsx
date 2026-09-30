"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  PhoneCall, 
  MessageCircle, 
  Share2, 
  CheckCircle2, 
  Bug, 
  Sprout, 
  Droplets, 
  AlertTriangle, 
  ChevronRight, 
  ArrowLeft, 
  Copy, 
  Check, 
  Sparkles,
  FlaskConical,
  Wheat,
  Info
} from "lucide-react";
import { Product, ParsedProductSpecs, getProductInquiryUrl } from "@/lib/products";

interface ProductDetailClientProps {
  product: Product;
  specs: ParsedProductSpecs;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  specs,
  relatedProducts,
}: ProductDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "crops" | "dosage" | "safety">("specs");

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} - Harihar Crop Science`,
          text: `Check out ${product.name} (${specs.technicalName}) by Harihar Crop Science:`,
          url: url,
        });
      } catch {
        // Fallback to clipboard
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappInquiryUrl = getProductInquiryUrl(
    product.name,
    product.id,
    specs.technicalName
  );

  return (
    <div className="relative z-10 pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-500 dark:text-stone-400 overflow-x-auto whitespace-nowrap py-2">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-stone-400" />
          <Link href="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-stone-400" />
          <Link 
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-primary transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-stone-400" />
          <span className="text-stone-900 dark:text-white font-bold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Main Product Showcase Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white dark:bg-stone-900/90 rounded-[2.5rem] border border-stone-200 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Product Visuals */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/40">
              {/* Top Badges */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-stone-400 bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full">
                  ID: {product.id}
                </span>
              </div>

              {/* Product Image Frame */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square w-full max-w-[460px] mx-auto rounded-3xl overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-white/10 shadow-xl group my-4"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} - ${specs.technicalName}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Genuine Seal Floating Badge */}
                <div className="absolute top-4 right-4 bg-emerald-600/95 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-200" />
                  Genuine
                </div>
              </motion.div>

              {/* Quality & Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Quality Standard</div>
                    <div className="text-xs font-black text-stone-800 dark:text-stone-200">ISO 9001:2015</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-stone-400">Lab Tested</div>
                    <div className="text-xs font-black text-stone-800 dark:text-stone-200">100% Certified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Product Information & Conversions */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Header Title & Tech Name */}
                <div className="mb-6">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-none mb-4">
                    {product.name}
                  </h1>

                  {/* Chemical Formula / Technical Highlight */}
                  <div className="inline-flex items-start sm:items-center gap-2.5 px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 w-full">
                    <FlaskConical className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 block sm:inline sm:mr-2">
                        Technical Formula:
                      </span>
                      <span className="font-extrabold text-sm sm:text-base">
                        {specs.technicalName}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3.5 rounded-2xl bg-stone-100/70 dark:bg-stone-800/50 border border-stone-200/50 dark:border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                      Category
                    </span>
                    <span className="text-sm font-black text-stone-900 dark:text-white">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-stone-100/70 dark:bg-stone-800/50 border border-stone-200/50 dark:border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                      Target
                    </span>
                    <span className="text-sm font-black text-stone-900 dark:text-white truncate block">
                      {specs.targetPests[0] || "Pest & Disease Control"}
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-stone-100/70 dark:bg-stone-800/50 border border-stone-200/50 dark:border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-1">
                      Authenticity
                    </span>
                    <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Harihar Original
                    </span>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3 mb-6 overflow-x-auto scrollbar-hide">
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === "specs"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800"
                    }`}
                  >
                    <Info className="w-4 h-4" /> विवरण (Overview)
                  </button>

                  <button
                    onClick={() => setActiveTab("crops")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === "crops"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800"
                    }`}
                  >
                    <Sprout className="w-4 h-4" /> उपयुक्त फसलें (Crops)
                  </button>

                  <button
                    onClick={() => setActiveTab("dosage")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === "dosage"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800"
                    }`}
                  >
                    <Droplets className="w-4 h-4" /> मात्रा एवं विधि (Dosage)
                  </button>

                  <button
                    onClick={() => setActiveTab("safety")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      activeTab === "safety"
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800"
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" /> सुरक्षा निर्देश (Safety)
                  </button>
                </div>

                {/* Tab Content 1: Overview & Pests */}
                {activeTab === "specs" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-2">
                        Product Description
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed font-medium">
                        {specs.descriptionCleaned}
                      </p>
                    </div>

                    {/* Target Pests & Diseases */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                        <Bug className="w-4 h-4 text-primary" />
                        नियंत्रित कीट एवं रोग (Target Pests & Controlled Diseases)
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {specs.targetPests.map((pest, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-800 dark:text-amber-200 border border-amber-500/20"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                            {pest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-3">
                        Key Features & Benefits (मुख्य विशेषताएं)
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {specs.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab Content 2: Crops */}
                {activeTab === "crops" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-sm font-black text-stone-900 dark:text-white mb-2">
                        अनुशंसित एवं उपयुक्त फसलें (Recommended Crops)
                      </h3>
                      <p className="text-xs text-stone-500 mb-4">
                        यह उत्पाद निम्नलिखित प्रमुख फसलों के लिए विशेष रूप से प्रभावी और सुरक्षित है:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {specs.crops.map((crop, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-white/5 flex items-center gap-2.5"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                              <Wheat className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200">
                              {crop}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Tab Content 3: Dosage */}
                {activeTab === "dosage" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-stone-900 border border-emerald-200 dark:border-emerald-800/40">
                      <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-black text-sm uppercase tracking-wider mb-2">
                        <Droplets className="w-4 h-4" />
                        अनुशंसित उपयोग मात्रा (Recommended Dosage)
                      </div>
                      <p className="text-lg sm:text-xl font-black text-stone-900 dark:text-white mb-3">
                        {specs.dosage}
                      </p>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-medium">
                        * नोट: फसल के फैलाव, उम्र तथा कीट या रोग के प्रकोप की तीव्रता के अनुसार कृषि विशेषज्ञ की सलाह अनुसार मात्रा निर्धारित करें।
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-white/5 text-xs text-stone-600 dark:text-stone-300 space-y-1.5">
                      <div className="font-bold text-stone-800 dark:text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> छिड़काव का सही समय (Application Timing):
                      </div>
                      <p>सुबह के समय (ओस सूखने के बाद) अथवा शाम के ठंडे मौसम में छिड़काव सर्वोत्तम परिणाम देता है। तेज धूप या वर्षा की संभावना में छिड़काव न करें।</p>
                    </div>
                  </motion.div>
                )}

                {/* Tab Content 4: Safety */}
                {activeTab === "safety" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-black text-sm uppercase tracking-wider mb-3">
                        <AlertTriangle className="w-4 h-4" />
                        सुरक्षा सावधानियां एवं भंडारण (Safety Instructions)
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-medium">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>दवा का छिड़काव करते समय सुरक्षात्मक वस्त्र, मास्क एवं दस्ताने का उपयोग अवश्य करें।</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>बच्चों, पालतू पशुओं एवं खाद्य पदार्थों की पहुंच से दूर ठंडे व सूखे स्थान पर रखें।</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>उपयोग के उपरांत खाली डिब्बे/बोतल को नष्ट करके सुरक्षित स्थान पर भूमि में दबा दें।</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>आंख या त्वचा के संपर्क में आने पर तुरंत प्रचुर मात्रा में स्वच्छ जल से धोएं।</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Farmer Conversion Action Bar */}
              <div className="mt-10 pt-8 border-t border-stone-200 dark:border-stone-800">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* WhatsApp Order Button */}
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 sm:py-5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95 text-center"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    Order / Inquire on WhatsApp
                  </a>

                  {/* Direct Call Toll-Free Helpline */}
                  <a
                    href="tel:+919630971205"
                    className="py-4 sm:py-5 px-6 rounded-2xl bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 shadow-lg text-center"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Call Helpline
                  </a>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    className="py-4 sm:py-5 px-4 rounded-2xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
                    title="Share Product"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="sm:hidden">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span className="sm:hidden">Share</span>
                      </>
                    )}
                  </button>
                </div>
                
                {copied && (
                  <p className="text-center text-xs font-bold text-emerald-600 mt-2 animate-pulse">
                    Link copied to clipboard!
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Products from Same Category */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">
                Related Formulations
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
                More from <span className="text-primary italic font-serif">{product.category}</span>
              </h2>
            </div>
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="text-xs sm:text-sm font-black text-primary hover:underline flex items-center gap-1"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.id}`}
                className="group bg-white dark:bg-stone-900 rounded-3xl p-5 border border-stone-200 dark:border-white/5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-50 dark:bg-stone-800 mb-4">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-primary">
                      {rel.category}
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-stone-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mb-4 font-medium">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-black text-primary">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
