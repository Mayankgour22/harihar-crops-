"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, MessageCircle } from "lucide-react";
import { products, getWhatsAppUrl } from "@/lib/products";

// Select 4 outstanding products to feature on the homepage
const FEATURED_IDS = ["prod-1", "prod-14", "prod-30", "prod-70"];

export default function FeaturedProducts() {
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
              className="group bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden border border-stone-200 dark:border-white/5 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1.5"
            >
              {/* Product Image Link */}
              <Link href={`/products/${p.id}`} className="block relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* View Details Overlay */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-full py-3 bg-primary text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider shadow-xl">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-white/20">
                  {p.category}
                </div>
              </Link>

              {/* Product Content */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <Link href={`/products/${p.id}`}>
                    <h3 className="text-xl font-black text-stone-900 dark:text-white mb-3 tracking-tighter leading-tight group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                  </Link>
                  <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mb-6 line-clamp-3">
                    {p.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-stone-100 dark:border-stone-800">
                  <Link
                    href={`/products/${p.id}`}
                    className="w-full py-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black transition-all"
                  >
                    View Details & Dosage <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(p.name, p.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black transition-all shadow-md active:scale-95"
                  >
                    Order on WhatsApp <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
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
    </section>
  );
}
