"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sprout, ShieldAlert, Droplets } from "lucide-react";

const categories = [
  {
    title: "Biostimulants",
    description: "Enhance crop growth, yield and quality through natural physiological processes.",
    image: "/cat-1.png",
    icon: <Sprout className="w-6 h-6" />,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Pesticides",
    description: "Advanced protection against pests and diseases for a healthy harvest.",
    image: "/cat-2.png",
    icon: <ShieldAlert className="w-6 h-6" />,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Water Soluble Fertilizers",
    description: "Precisely balanced nutrition for efficient uptake and rapid plant growth.",
    image: "/cat-3.png",
    icon: <Droplets className="w-6 h-6" />,
    color: "from-lime-500 to-emerald-500",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right transition-all" />

      <div className="container mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Specialized Solutions</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-stone-900 dark:text-white leading-[0.95] tracking-tighter">
              Precision <span className="text-primary italic font-serif">Categories</span> <br /> 
              for Maximum Yield.
            </h2>
          </div>
          <p className="text-lg text-stone-500 dark:text-stone-400 max-w-sm font-medium">
            Discover our scientifically formulated products designed for the modern Indian farm.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="group relative h-[600px] rounded-[2.5rem] overflow-hidden bg-stone-900 shadow-2xl hover:-translate-y-4 transition-all duration-700"
          >
            {/* Background Image with Zoom & Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={cat.image} 
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-125 opacity-60 group-hover:opacity-40"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent`} />
            </div>

            {/* Top Icon Badge */}
            <div className="absolute top-8 left-8 z-20">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-xl transform group-hover:rotate-[360deg] transition-transform duration-1000`}>
                    {cat.icon}
                </div>
            </div>

            {/* Main Content */}
            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
              <h4 className="text-3xl font-black text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                {cat.title}
              </h4>
              <p className="text-stone-300 mb-8 line-clamp-3 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {cat.description}
              </p>
              
              <div className="flex items-center gap-4">
                 <button className="flex-grow py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-stone-900 transition-all flex items-center justify-center gap-2 group/btn">
                    View Products
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                 </button>
                 <div className="w-14 h-14 shrink-0 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 group-hover:text-primary transition-colors">
                    <Droplets className="w-6 h-6" />
                 </div>
              </div>
            </div>

            {/* Decorative Hover Element */}
            <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br ${cat.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
