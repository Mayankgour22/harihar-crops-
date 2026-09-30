"use client";

import React, { useState, useMemo, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingCart, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { products, getWhatsAppUrl } from "@/lib/products";

const categories = ["All", "Biostimulants", "Pesticides", "Fungicides", "Growth Regulators", "Soluble Fertilizers"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "All");
  const [searchQuery, setSearchQuery] = useState("");

  // Update category if URL changes
  React.useEffect(() => {
    setSelectedCategory(categoryFromUrl || "All");
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 font-sans selection:bg-primary/30 selection:text-primary">
      <div className="fixed inset-0 noise z-[1] pointer-events-none" />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <section className="container mx-auto px-6 mb-16 text-center">
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-8">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Our Product Catalog</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-stone-900 dark:text-white mb-6 leading-none tracking-tighter">
                    Solutions for <span className="text-primary italic font-serif">Every Crop.</span>
                </h1>
                <p className="text-lg text-stone-500 max-w-2xl mx-auto font-medium">
                    Explore our research-backed agricultural solutions. Click any formulation to view complete technical details, target pests, dosage guidelines, and packaging specifications.
                </p>
             </motion.div>
        </section>

        <section className="container mx-auto px-6 mb-12 sticky top-24 z-30">
            <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200 dark:border-white/10 p-4 md:p-6 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-6">
                <div className="relative w-full lg:w-1/3 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search by name, crop, insect, or formula..." 
                      className="w-full pl-12 pr-6 py-4 bg-stone-100 dark:bg-stone-800 rounded-2xl border-none text-stone-900 dark:text-white font-bold focus:ring-2 focus:ring-primary outline-none transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-2/3 scrollbar-hide">
                    <Filter className="w-5 h-5 text-primary shrink-0 mr-2" />
                    {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-6 py-3 rounded-xl whitespace-nowrap text-xs font-black uppercase tracking-widest transition-all ${
                            selectedCategory === cat 
                              ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" 
                              : "bg-stone-50 dark:bg-stone-800 text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-white"
                          }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </section>

        <section className="container mx-auto px-6 min-h-[50vh]">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-stone-400">
                Showing {filteredProducts.length} Formulations
              </span>
              <span className="text-xs font-bold text-primary flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Tap any product for complete dosage & specs
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProducts.map((p, idx) => (
                        <motion.div
                          layout
                          key={p.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3, delay: idx * 0.03 }}
                          className="group bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden border border-stone-200 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1.5"
                        >
                            <Link href={`/products/${p.id}`} className="block relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                                <Image 
                                  src={p.image} 
                                  alt={p.name} 
                                  fill 
                                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" 
                                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <div className="absolute bottom-6 left-6 right-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="w-full py-3.5 bg-primary text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider shadow-xl">
                                        View Full Details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                                
                                <div className="absolute top-6 left-6 px-3.5 py-1.5 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-white/20">
                                    {p.category}
                                </div>
                            </Link>

                            <div className="p-7 flex-grow flex flex-col justify-between">
                                <div>
                                    <Link href={`/products/${p.id}`}>
                                      <h3 className="text-xl font-black text-stone-900 dark:text-white mb-2 tracking-tight leading-tight group-hover:text-primary transition-colors">
                                        {p.name}
                                      </h3>
                                    </Link>
                                    <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm font-medium mb-6 line-clamp-3 leading-relaxed">
                                      {p.description}
                                    </p>
                                </div>

                                <div className="space-y-2.5 pt-4 border-t border-stone-100 dark:border-stone-800">
                                    <Link 
                                      href={`/products/${p.id}`}
                                      className="w-full py-3.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-900 dark:text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black transition-all"
                                    >
                                      View Dosage & Specs <ArrowRight className="w-3.5 h-3.5 text-primary" />
                                    </Link>

                                    <a 
                                      href={getWhatsAppUrl(p.name, p.id)} 
                                      target="_blank" 
                                      rel="noopener noreferrer" 
                                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-black transition-all shadow-md active:scale-95"
                                    >
                                      Order on WhatsApp <MessageCircle className="w-4 h-4 fill-current" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center font-black animate-pulse text-stone-400 italic">Exploring Harihar Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
