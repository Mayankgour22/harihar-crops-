"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowRight, MessageCircle, ZoomIn, X } from "lucide-react";
import { products, getWhatsAppUrl, Product } from "@/lib/products";

// Select 4 outstanding products to feature on the homepage
const FEATURED_IDS = ["prod-1", "prod-14", "prod-30", "prod-70"];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products by featured list
  const featuredList = products.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <ShoppingCart className="w-4 h-4 text-primary" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Featured Products</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white mb-6 leading-none tracking-tighter">
            Our Top Agricultural <span className="text-primary italic font-serif">Solutions.</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto font-medium">
            Explore some of our most trusted and highly recommended formulations designed for maximum yield and protection.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredList.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden border border-stone-200 dark:border-white/5 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Quick View Button */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="w-full py-3 bg-white/20 backdrop-blur-3xl border border-white/30 text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black italic hover:bg-white hover:text-stone-950 transition-all"
                  >
                    Quick View <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-white/20">
                  {p.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-black text-stone-900 dark:text-white mb-3 tracking-tighter leading-tight group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mb-8 flex-grow line-clamp-3">
                  {p.description}
                </p>
                <a
                  href={getWhatsAppUrl(p.name, p.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-950 rounded-2xl flex items-center justify-center gap-2 text-xs font-black italic hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-md active:scale-95"
                >
                  Order on WhatsApp <MessageCircle className="w-4 h-4 fill-current" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-4 px-12 py-5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all group italic"
          >
            Explore Full Product Catalog
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-125 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 pointer-events-none"
          >
            <div
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-xl pointer-events-auto"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl bg-white dark:bg-stone-900 rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)] pointer-events-auto border border-white/10"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 md:top-10 md:right-10 z-10 w-12 h-12 bg-stone-100/80 dark:bg-stone-800/80 backdrop-blur-md rounded-full flex items-center justify-center text-stone-500 hover:text-white hover:bg-red-500 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative aspect-square lg:aspect-auto h-[300px] sm:h-[400px] lg:h-[700px]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
                  <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 sm:mb-6 italic">
                    Product Details
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-stone-900 dark:text-white mb-6 sm:mb-8 leading-none tracking-tighter">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-base sm:text-xl text-stone-500 dark:text-stone-400 font-medium mb-8 sm:mb-12 leading-relaxed">
                    {selectedProduct.description} High-efficiency formula for sustainable farming.
                  </p>
                  <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">
                        Category
                      </p>
                      <p className="text-sm sm:text-lg font-bold text-stone-900 dark:text-white">
                        {selectedProduct.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">
                        Certifications
                      </p>
                      <p className="text-sm sm:text-lg font-bold text-stone-900 dark:text-white">
                        ISO 9001:2015
                      </p>
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl(selectedProduct.name, selectedProduct.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 sm:py-6 bg-primary hover:bg-primary-hover text-white rounded-2xl flex items-center justify-center gap-4 text-base sm:text-xl font-black italic shadow-2xl shadow-primary/30 active:scale-95 transition-all"
                  >
                    Order via WhatsApp <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
