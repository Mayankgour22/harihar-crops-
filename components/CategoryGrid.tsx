"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { ArrowRight, Sprout, ShieldAlert, Droplets, Zap, ShieldCheck } from "lucide-react";

const allCategories = [
  {
    title: "Biostimulants",
    description: "Enhance crop growth, yield and quality through natural physiological processes.",
    image: "/cat-1.png",
    icon: <Sprout className="w-6 h-6" />,
    color: "from-emerald-500 to-green-600",
    href: "/products?category=Biostimulants"
  },
  {
    title: "Pesticides",
    description: "Advanced protection against pests and diseases for a healthy harvest.",
    image: "/cat-2.png",
    icon: <ShieldAlert className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600",
    href: "/products?category=Pesticides"
  },
  {
    title: "Soluble Fertilizers",
    description: "Precisely balanced nutrition for efficient uptake and rapid plant growth.",
    image: "/cat-3.png",
    icon: <Droplets className="w-6 h-6" />,
    color: "from-lime-500 to-emerald-500",
    href: "/products?category=Soluble Fertilizers"
  },
  {
    title: "Growth Regulators",
    description: "Expertly adjust and enhance the hormones of plants for quality development.",
    image: "/agri_factory_interior_1774947009707.png",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    href: "/products?category=Growth Regulators"
  },
  {
    title: "Fungicides",
    description: "Superior protection against fungal diseases to ensure healthy crop cycles.",
    image: "/agri_medicine_bottles_1774947032205.png",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-red-500 to-rose-600",
    href: "/products?category=Fungicides"
  },
];

export default function CategoryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Multiply categories for infinite scroll effect
  const displayItems = [...allCategories, ...allCategories];

  return (
    <section className="py-24 bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right transition-all" />

      <div className="container mx-auto px-6 lg:px-8 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Our Specialization</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-stone-900 dark:text-white leading-[0.85] tracking-tighter">
              Precision <span className="text-primary italic font-serif">Categories</span> <br /> 
              at Every <span className="text-secondary italic font-serif">Scale.</span>
            </h2>
          </div>
          <p className="text-lg text-stone-500 dark:text-stone-400 max-w-sm font-medium italic">
            Swipe or explore our comprehensive portfolio of scientifically advanced solutions.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group">
        {/* Gradients to fade out the edges */}
        <div className="absolute top-0 left-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white dark:from-stone-900 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white dark:from-stone-900 to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          className="flex gap-8 px-8 py-10"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          // Pausing logic via CSS for better performance
          style={{ width: "fit-content" }}
          whileHover={{ transition: { duration: 10000 } }} // "Pseudo-pause" by slowing down extremely
        >
          {displayItems.map((cat, idx) => (
            <motion.div
              key={`${cat.title}-${idx}`}
              className="flex-shrink-0 w-[400px] md:w-[450px] relative h-[550px] rounded-[3rem] overflow-hidden bg-stone-900 shadow-2xl hover:-translate-y-4 transition-all duration-700 group/card"
            >
              {/* Background Image with Zoom & Overlay */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={cat.image} 
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover/card:scale-125 opacity-60 group-hover/card:opacity-40"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent`} />
              </div>

              {/* Top Icon Badge */}
              <div className="absolute top-8 left-8 z-20">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-xl transform group-hover/card:rotate-[360deg] transition-transform duration-1000`}>
                      {cat.icon}
                  </div>
              </div>

              {/* Main Content */}
              <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                <h4 className="text-3xl font-black text-white mb-4 group-hover/card:text-primary transition-colors leading-tight">
                  {cat.title}
                </h4>
                <p className="text-stone-300 mb-8 line-clamp-3 font-medium opacity-80 group-hover/card:opacity-100 transition-opacity">
                  {cat.description}
                </p>
                
                <div className="flex items-center gap-4">
                   <Link href={cat.href} className="flex-grow">
                     <div className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-stone-900 transition-all flex items-center justify-center gap-2 group/btn">
                       View Products
                       <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                     </div>
                   </Link>
                </div>
              </div>

              {/* Decorative Hover Element */}
              <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br ${cat.color} opacity-20 blur-3xl group-hover/card:opacity-40 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
