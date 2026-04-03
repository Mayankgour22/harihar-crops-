"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Leaf, Sprout, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Agricultural Field"
          fill
          priority
          className="object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
      </div>

      {/* Floating Animated Orbs for Premium feel */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white italic">"किसान का भरोसा - हरिहर"</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-8xl font-black text-white mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter"
          >
            किसान की उन्नति, <br />
            <span className="relative inline-block mt-2">
               <span className="relative z-10 text-primary italic font-serif">देश की प्रगति.</span>
               <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
               </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
             भारतीय किसानों के अटूट भरोसे और विश्व-स्तरीय <span className="text-white font-bold border-b-2 border-primary italic">Agri-Science</span> के साथ, हरिहर क्रॉप साइंस लेकर आया है शुद्ध और उच्च गुणवत्ता वाली दवाएं।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 py-8 border-t border-white/10"
          >
            {[
              { icon: <Sprout className="w-6 h-6" />, title: "Innovation", desc: "Advanced R&D Solutions" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Trust", desc: "ISO Certified Quality" },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Impact", desc: "1M+ Happy Farmers" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-widest">{item.title}</p>
                  <p className="text-stone-400 text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40">Scroll</span>
        <div className="w-6 h-11 border-2 border-white/20 rounded-full flex justify-center p-1.5 backdrop-blur-sm">
          <motion.div 
             animate={{ height: ["20%", "60%", "20%"] }}
             transition={{ repeat: Infinity, duration: 1.5 }}
             className="w-1 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}
