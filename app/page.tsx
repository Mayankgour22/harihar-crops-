"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CategoryGrid from "@/components/CategoryGrid";
import OurWorkSection from "@/components/OurWorkSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Image from "next/image";
import { ArrowRight, Leaf, Sprout, ShieldCheck, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Universal Noise Overlay - Adjusted Z-index to not block UI */}
      <div className="fixed inset-0 noise z-[1] pointer-events-none" />
      
      <Navbar />
      
      <main className="flex-grow pt-0 relative z-10">
        <Hero />
        
        <Stats />

        {/* About Preview Section - Redesigned for Premium Look */}
        <section className="py-32 relative overflow-hidden bg-white dark:bg-stone-900">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 relative group">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] border-[12px] border-white dark:border-stone-800 transition-all duration-700 hover:rotate-2 group-hover:scale-[1.02]">
                  <Image 
                    src="/cat-1.png" 
                    alt="Agricultural Innovation" 
                    width={800} 
                    height={1000}
                    className="object-cover h-[700px] w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating Stat Card inside Image */}
                  <div className="absolute bottom-10 left-10 right-10 bg-white/20 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-4xl font-black mb-1">15+</p>
                    <p className="text-sm font-bold uppercase tracking-widest text-white/80">Years of Work Excellence</p>
                  </div>
                </div>
                
                {/* Decorative Blobs */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -z-0 animate-pulse" />
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-secondary/15 rounded-full blur-[80px] -z-0" />
              </div>
              
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 dark:bg-primary/20 rounded-full mb-8">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">About Our Legacy</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black text-stone-900 dark:text-white mb-10 leading-[0.95] tracking-tighter">
                  Nurturing <span className="text-primary italic font-serif">Prosperity</span> <br /> 
                  through Science.
                </h2>
                
                <p className="text-xl text-stone-600 dark:text-stone-400 mb-12 leading-relaxed font-medium">
                  At Harihar Crop Science, founded by <span className="text-stone-900 dark:text-white font-black italic underline decoration-primary/40 underline-offset-8">Mahendra Gurjar</span>, we believe that the soul of India resides in its soil. Our mission is to bridge the gap between traditional wisdom and modern biotechnology, delivering solutions that empower every farmer.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start gap-4 p-6 bg-stone-50 dark:bg-stone-800/50 rounded-3xl border border-stone-100 dark:border-stone-800 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white dark:bg-stone-900 shadow-sm flex items-center justify-center text-primary">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest mb-1 italic">Quality Guaranteed</p>
                      <p className="text-sm text-stone-500 font-medium leading-normal">ISO 9001:2015 Certified manufacturing excellence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-stone-50 dark:bg-stone-800/50 rounded-3xl border border-stone-100 dark:border-stone-800 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white dark:bg-stone-900 shadow-sm flex items-center justify-center text-primary">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-widest mb-1 italic">Fast Acting</p>
                      <p className="text-sm text-stone-500 font-medium leading-normal">High-efficiency delivery systems for rapid results.</p>
                    </div>
                  </div>
                </div>
                
                <button className="px-10 py-5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 group italic">
                  Read Our Full Story 
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-125 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <OurWorkSection />
        <CategoryGrid />

        {/* Global Impact CTA - Redesigned */}
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-stone-950 z-0">
               {/* Animated Background element */}
               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#15803d_0.5px,_transparent_0.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                    Join the Movement for a <br />
                    <span className="text-primary italic font-serif">Bountiful India.</span>
                  </h2>
                  <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
                    Partner with Harihar Crops and bring the latest in agricultural science to your region. Together, we can transform farming.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <button className="px-12 py-5 bg-primary hover:bg-primary-hover text-white font-black rounded-2xl shadow-2xl shadow-primary/30 active:scale-95 transition-all flex items-center gap-3">
                        Become a Distributor <Sprout className="w-5 h-5" />
                      </button>
                      <a href="tel:+91963071205" className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white hover:text-stone-900 transition-all active:scale-95">
                        Talk to Our Experts
                      </a>
                  </div>
                </motion.div>
            </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

