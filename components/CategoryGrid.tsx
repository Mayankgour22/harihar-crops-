"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sprout, ShieldAlert, Droplets, Zap, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const allCategories = [
  {
    title: "Biostimulants",
    description: "Enhance crop growth, yield and quality through natural physiological processes.",
    image: "/cat-1.png",
    icon: <Sprout className="w-5 h-5" />,
    color: "from-emerald-500 to-green-600",
    href: "/products?category=Biostimulants"
  },
  {
    title: "Pesticides",
    description: "Advanced protection against pests and diseases for a healthy harvest.",
    image: "/cat-2.png",
    icon: <ShieldAlert className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
    href: "/products?category=Pesticides"
  },
  {
    title: "Soluble Fertilizers",
    description: "Precisely balanced nutrition for efficient uptake and rapid plant growth.",
    image: "/cat-3.png",
    icon: <Droplets className="w-5 h-5" />,
    color: "from-lime-500 to-emerald-500",
    href: "/products?category=Soluble Fertilizers"
  },
  {
    title: "Growth Regulators",
    description: "Expertly adjust and enhance the hormones of plants for quality development.",
    image: "/agri_factory_interior_1774947009707.png",
    icon: <Zap className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-600",
    href: "/products?category=Growth Regulators"
  },
  {
    title: "Fungicides",
    description: "Superior protection against fungal diseases to ensure healthy crop cycles.",
    image: "/agri_medicine_bottles_1774947032205.png",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "from-red-500 to-rose-600",
    href: "/products?category=Fungicides"
  },
];

export default function CategoryGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % allCategories.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allCategories.length) % allCategories.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Calculate slide width including gap
  const getSlideOffset = () => {
    const gap = windowWidth < 768 ? 24 : 32;
    const cardWidth = windowWidth < 640 ? windowWidth * 0.85 : windowWidth < 768 ? windowWidth * 0.5 : 400;
    return -(currentIndex * (cardWidth + gap));
  };

  return (
    <section className="py-24 bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right transition-all opacity-50" />

      <div className="container mx-auto px-6 lg:px-8 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] italic">Our Specialization</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-stone-900 dark:text-white leading-[0.85] tracking-tighter">
              Precision <span className="text-primary italic font-serif">Categories</span> <br /> 
              at Every <span className="text-secondary italic font-serif">Scale.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-stone-200 dark:border-stone-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-6 overflow-visible">
          <motion.div 
            className="flex gap-6 md:gap-8"
            animate={{ x: getSlideOffset() }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: "fit-content" }}
          >
            {allCategories.map((cat, idx) => (
              <div
                key={cat.title}
                className="flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[400px] relative h-[500px] md:h-[550px] rounded-[2.5rem] overflow-hidden bg-stone-900 shadow-2xl transition-all duration-700 group/card border border-white/5"
              >
                {/* Background Image with Zoom & Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={cat.image} 
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover/card:scale-110 opacity-60 group-hover/card:opacity-40"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent`} />
                </div>

                {/* Top Icon Badge */}
                <div className="absolute top-8 left-8 z-20">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-xl transform group-hover/card:rotate-[360deg] transition-transform duration-1000`}>
                        {cat.icon}
                    </div>
                </div>

                {/* Main Content */}
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <h4 className="text-3xl font-black text-white mb-4 group-hover/card:text-primary transition-colors leading-tight">
                    {cat.title}
                  </h4>
                  <p className="text-stone-300 text-sm mb-8 line-clamp-3 font-medium opacity-80 group-hover/card:opacity-100 transition-opacity">
                    {cat.description}
                  </p>
                  
                  <Link href={cat.href} className="w-full">
                    <div className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/10 text-white font-black rounded-2xl hover:bg-white hover:text-stone-900 transition-all flex items-center justify-center gap-2 group/btn italic text-sm">
                      View Products
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-3 mt-12">
        {allCategories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-500 rounded-full ${
              currentIndex === idx 
                ? "w-10 h-2 bg-primary" 
                : "w-2 h-2 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

