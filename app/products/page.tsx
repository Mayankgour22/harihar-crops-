"use client";

import React, { useState, useMemo, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingCart, MessageCircle, ArrowRight, X, ZoomIn } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { products, getWhatsAppUrl, Product } from "@/lib/products";

const categories = ["All", "Biostimulants", "Pesticides", "Fungicides", "Growth Regulators", "Soluble Fertilizers"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Update category if URL changes
  React.useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
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
                    Explore our research-backed agricultural solutions, categorized to help you find the right fit for your farming needs.
                </p>
             </motion.div>
        </section>

        <section className="container mx-auto px-6 mb-12 sticky top-24 z-30">
            <div className="bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl border border-stone-200 dark:border-white/10 p-4 md:p-6 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-6">
                <div className="relative w-full lg:w-1/3 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search products..." 
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProducts.map((p, idx) => (
                        <motion.div
                          layout
                          key={p.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="group bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden border border-stone-200 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <button onClick={() => setSelectedProduct(p)} className="w-full py-4 bg-white/20 backdrop-blur-3xl border border-white/30 text-white rounded-2xl flex items-center justify-center gap-2 text-sm font-black italic hover:bg-white hover:text-stone-950 transition-all">
                                        Quick View <ZoomIn className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-white/20">
                                    {p.category}
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-black text-stone-900 dark:text-white mb-3 tracking-tighter leading-tight group-hover:text-primary transition-colors">{p.name}</h3>
                                <p className="text-stone-500 dark:text-stone-400 text-sm font-medium mb-8 flex-grow line-clamp-3">{p.description}</p>
                                <a href={getWhatsAppUrl(p.name, p.id)} target="_blank" rel="noopener noreferrer" className="w-full py-5 bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-950 rounded-2xl flex items-center justify-center gap-3 text-sm font-black italic hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">
                                    Order on WhatsApp <MessageCircle className="w-5 h-5 fill-current" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
      </main>

      <AnimatePresence>
          {selectedProduct && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                  <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-xl pointer-events-auto" onClick={() => setSelectedProduct(null)} />
                  <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} className="relative w-full max-w-5xl bg-white dark:bg-stone-900 rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.5)] pointer-events-auto border border-white/10">
                      <button onClick={() => setSelectedProduct(null)} className="absolute top-10 right-10 z-10 w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center text-stone-500 hover:text-white hover:bg-red-500 transition-all"><X className="w-6 h-6" /></button>
                      <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 relative aspect-square lg:aspect-auto h-[400px] lg:h-[700px]"><Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-cover" /></div>
                          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                              <p className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 italic">Product In Detail</p>
                              <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white mb-8 leading-none tracking-tighter">{selectedProduct.name}</h2>
                              <p className="text-xl text-stone-500 dark:text-stone-400 font-medium mb-12 leading-relaxed">{selectedProduct.description} High-efficiency formula for sustainable farming.</p>
                              <div className="grid grid-cols-2 gap-8 mb-12">
                                  <div><p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Category</p><p className="text-lg font-bold text-stone-900 dark:text-white">{selectedProduct.category}</p></div>
                                  <div><p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Certifications</p><p className="text-lg font-bold text-stone-900 dark:text-white">ISO 9001:2015</p></div>
                              </div>
                              <a href={getWhatsAppUrl(selectedProduct.name, selectedProduct.id)} target="_blank" rel="noopener noreferrer" className="w-full py-6 bg-primary hover:bg-primary-hover text-white rounded-2xl flex items-center justify-center gap-4 text-xl font-black italic shadow-2xl shadow-primary/30 active:scale-95 transition-all">Order via WhatsApp <MessageCircle className="w-6 h-6 fill-current" /></a>
                          </div>
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>
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
