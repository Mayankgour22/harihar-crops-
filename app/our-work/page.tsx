"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Truck, Microscope, Award, ShieldCheck, Zap, ArrowRight, Play, ShoppingCart } from "lucide-react";

export default function OurWorkPage() {
  const processes = [
    {
      title: "R&D & Formulation",
      icon: Microscope,
      description: "Our in-house lab at the Gujarat facility focuses on developing high-stability formulations customized for Western India's unique soil types.",
      image: "/images/field-photo.png",
      color: "bg-emerald-500",
    },
    {
      title: "Advanced Manufacturing",
      icon: Factory,
      description: "Utilizing modern mixing technology to achieve precise concentration and purity across every batch of crop science solutions.",
      image: "/images/factory-photo.png",
      color: "bg-teal-600",
    },
    {
      title: "Automated Bottling",
      icon: ShieldCheck,
      description: "Secure, high-precision bottling lines ensure that each unit is filled, sealed, and labeled with absolute consistency.",
      image: "/images/bottles-photo.png",
      color: "bg-blue-600",
    },
    {
      title: "Logistics Excellence",
      icon: Truck,
      description: "Our regional storage nodes ensure rapid delivery to our dealer network across Gujarat and beyond.",
      image: "/images/factory-photo.png",
      color: "bg-amber-600",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 font-sans selection:bg-primary/30 selection:text-primary">
      <div className="fixed inset-0 noise z-[1] pointer-events-none" />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 relative z-10 overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(circle_at_center,_#15803d_0.5px,_transparent_0.5px)] [background-size:32px_32px] pointer-events-none" />
        
        {/* Page Hero */}
        <div className="container mx-auto px-6 mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-8">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Our Workflow Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-stone-900 dark:text-white mb-6 md:mb-10 leading-[1] md:leading-[0.85] tracking-tighter">
              A Culture of <span className="text-primary italic font-serif">Precision</span><br className="hidden md:block" />
              & <span className="text-secondary italic font-serif">Commitment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 max-w-2xl font-medium leading-relaxed">
              Discover how we bridge the gap between scientific innovation and the farmer's field, through our world-class manufacturing and distribution excellence.
            </p>
          </motion.div>
          
         {/* Main Visual Component - Actual Video Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 relative rounded-[3rem] overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-[12px] border-white dark:border-stone-900"
          >
            <div className="aspect-video md:aspect-[21/9] relative overflow-hidden">
               <video 
                 src="/images/factory-video.mp4" 
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Live Status Label */}
              <div className="absolute top-8 right-8 flex items-center gap-3 bg-red-500 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest animate-pulse shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full" />
                Live: Site Operations
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Section - High Impact Grid */}
        <section className="py-24 bg-white dark:bg-stone-900 shadow-[0_0_100px_rgba(0,0,0,0.05)] rounded-[5rem] mx-4 md:mx-10 my-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white mb-6 uppercase tracking-tighter">
                        The <span className="text-primary italic font-serif lowercase">Production</span> Journey.
                    </h2>
                    <p className="text-lg text-stone-500 font-medium italic">
                        From raw material sourcing to the final packaging, every step is optimized for quality and sustainability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
                    {processes.map((proc, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex flex-col gap-8 group"
                        >
                            <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-stone-50 dark:border-stone-800">
                                <Image src={proc.image} alt={proc.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute top-6 left-6">
                                    <div className={`${proc.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 translate-y-3 group-hover:rotate-0 group-hover:translate-y-0 transition-all duration-500`}>
                                        <proc.icon className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-4">
                                <p className="text-stone-400 font-black text-xs uppercase tracking-widest mb-4">Step {index + 1}: {proc.title}</p>
                                <h3 className="text-3xl font-black text-stone-900 dark:text-white mb-6">{proc.title}</h3>
                                <p className="text-lg text-stone-600 dark:text-stone-400 font-medium leading-relaxed">
                                    {proc.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Sales & Distribution Highlight */}
        <section className="py-24 container mx-auto px-6 relative">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                   <h2 className="text-4xl md:text-7xl font-black text-stone-900 dark:text-white mb-6 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter">
                      Serving the <br className="hidden md:block" />
                      Agricultural <span className="text-primary italic font-serif">Heartland.</span>
                   </h2>
                   <div className="space-y-8 mb-12">
                      <div className="flex items-center gap-6 p-6 bg-white dark:bg-stone-900 rounded-[2rem] border border-stone-200 dark:border-white/5 hover:border-primary/50 transition-colors cursor-default group">
                         <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <ShoppingCart className="w-6 h-6" />
                         </div>
                         <div>
                            <h4 className="font-black italic text-lg uppercase tracking-wide">Direct Farmer Connect</h4>
                            <p className="text-stone-500 font-medium">We reach over 500,000 farmers directly every season.</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 p-6 bg-white dark:bg-stone-900 rounded-[2rem] border border-stone-200 dark:border-white/5 hover:border-primary/50 transition-colors cursor-default group">
                         <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                            <Zap className="w-6 h-6" />
                         </div>
                         <div>
                            <h4 className="font-black italic text-lg uppercase tracking-wide">Dealer Support</h4>
                            <p className="text-stone-500 font-medium">Over 2,000+ authorized retail partners nationwide.</p>
                         </div>
                      </div>
                   </div>
                   <button className="px-12 py-5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                      View Distribution Map <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
                <div className="lg:w-1/2 relative bg-stone-200 dark:bg-stone-800 rounded-[3rem] p-10">
                   <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-stone-900 aspect-square">
                      <Image src="/images/field-photo.png" alt="Field Distribution" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                   </div>
                   {/* Floating Counter Card */}
                   <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-[2rem] text-white shadow-2xl z-20">
                      <p className="text-6xl font-black tracking-tighter mb-1 leading-none italic">250+</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary-hover">Active Product SKUs</p>
                   </div>
                </div>
            </div>
        </section>

        {/* Global Impact CTA - Redesigned */}
        <section className="mt-32 py-32 relative overflow-hidden bg-stone-950 rounded-[4rem] mx-4 md:mx-10 text-center">
            <div className="container mx-auto px-6 relative z-10">
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-10 leading-[1] md:leading-[0.9] tracking-tighter">
                    Ready to <span className="text-primary italic font-serif">Cultivate</span> <br className="hidden md:block" />
                    Greatness?
                  </h2>
                  <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
                    Whether you are a farmer looking for the best yield or a distributor looking to expand, we have the right solutions for you.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <button className="px-12 py-5 bg-primary hover:bg-primary-hover text-white font-black rounded-2xl shadow-2xl shadow-primary/30 active:scale-95 transition-all flex items-center gap-3">
                        Join Our Network <Zap className="w-5 h-5" />
                      </button>
                  </div>
            </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
