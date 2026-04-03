"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Sparkles, Sprout, Heart, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
                  <Sprout className="w-4 h-4 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">Our Legacy</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-stone-900 dark:text-white leading-[1] md:leading-tight mb-6 md:mb-8 tracking-tighter">
                  Empowering <span className="text-secondary italic font-serif">Indian</span> Farmers Since 2015.
                </h1>
                <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed mb-4 max-w-xl">
                   Based in <span className="font-bold text-primary">Gujarat</span>, <span className="font-bold text-primary italic">Harihar Crop Science</span> is an Indian agriculture company founded by <span className="font-bold text-primary underline decoration-primary/30 underline-offset-8">Mahendra Gurjar</span>. The company specializes in manufacturing high-quality pesticides, fertilizers, and biostimulants for research-driven modern farming solutions.
                </p>
                <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed mb-10 max-w-xl">
                   Founder: <span className="font-bold text-primary italic">Mahendra Gurjar</span>
                </p>
                <div className="flex flex-wrap gap-4">
                   <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
                      <Shield className="w-5 h-5 text-secondary" />
                      <span className="font-bold text-stone-800 dark:text-white">ISI Certified</span>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="font-bold text-stone-800 dark:text-white">Headquarters: Gujarat</span>
                   </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800"
               >
                 <Image 
                   src="/images/factory-photo.png" 
                   alt="Harihar Crop Science Factory Floor" 
                   fill 
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                 <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl">
                    <p className="text-white text-3xl font-black italic">Quality Guaranteed.</p>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white dark:bg-stone-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-6 tracking-tighter">What Drives Us Forward?</h2>
             <p className="text-stone-500 font-medium leading-relaxed">Unlike multi-national conglomerates, we understand the local soil conditions and the challenges faced by our farming community. Our products are formulated keeping Indian agriculture in mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Heart, 
                title: "Soil Spirit", 
                desc: "We believe the soul of Gujarat's agriculture lies in respecting and working with the local soil anatomy.",
                color: "bg-rose-500/10 text-rose-500" 
              },
              { 
                icon: Sparkles, 
                title: "Indigenous Science", 
                desc: "Our labs don't just innovate—they investigate the precise needs of local crops for a balanced harvest.",
                color: "bg-amber-500/10 text-amber-500" 
              },
              { 
                icon: Shield, 
                title: "Trusted Purity", 
                desc: "100% adherence to purity standards ensures that what the farmer buys is exactly what his field needs.",
                color: "bg-emerald-500/10 text-emerald-500" 
              },
              { 
                icon: CheckCircle, 
                title: "Field Integrity", 
                desc: "Built in India for India's diverse and demanding agricultural landscapes with zero compromises.",
                color: "bg-blue-500/10 text-blue-500" 
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] border border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-950/50 hover:border-primary/30 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.color} group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-stone-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Showcase */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2">
               <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white leading-[1] md:leading-tight mb-6 md:mb-8 tracking-tighter">
                  Real Manufacturing, <br className="hidden md:block" />
                  <span className="text-primary italic font-serif">Real Results.</span>
               </h2>
               <p className="text-lg text-stone-600 dark:text-stone-400 mb-10 leading-relaxed">
                  Our factory in <span className="font-bold">Gujarat</span> works tirelessly to produce fungicides, pesticides, and biostimulants that set the industry standard. We invite our dealers and partners to visit our site and witness our commitment to quality.
               </p>
               <ul className="space-y-4 mb-10">
                 {["50,000+ Liters Monthly Capacity", "ISO 9001:2015 Standards followed", "Eco-friendly disposal system", "Direct employment to 100+ local staff"].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 font-bold text-stone-800 dark:text-white">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      {item}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="lg:w-1/2 flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-lg"
              >
                 <Image src="/images/bottles-photo.png" alt="Operational Excellence" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-lg sm:translate-y-8"
              >
                 <Image src="/images/field-photo.png" alt="The Crop Field" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-lg sm:-translate-y-8 sm:col-span-2"
              >
                 <Image src="/images/factory-photo.png" alt="In-House R&D Unit" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder / Message Section */}
      <section className="py-24 bg-stone-900 text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
         <div className="container mx-auto px-12 relative z-10 flex flex-col items-center text-center">
            <Heart className="w-16 h-16 text-primary mb-10 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-black italic font-serif mb-8 text-secondary">"Hamara Lakshya, Kisan Ka Samridhi"</h2>
            <p className="text-2xl text-stone-300 font-medium max-w-4xl leading-relaxed italic mb-12">
               "We started Harihar Crop Science with a simple goal: to provide high-quality medicine for crops at an affordable price so that every farmer in India can have a healthy harvest and a better life."
            </p>
            <div className="flex flex-col items-center">
               <div className="w-20 h-20 bg-stone-800 rounded-full mb-4 border-2 border-primary border-dashed p-1">
                  <div className="w-full h-full bg-stone-700 rounded-full flex items-center justify-center text-primary font-black text-2xl italic">M</div>
               </div>
               <p className="text-xl font-bold text-white">Mahendra Gurjar</p>
               <p className="text-primary font-bold tracking-widest text-xs uppercase">Founder, Harihar Crop Science</p>
            </div>
         </div>
      </section>

      {/* Simple Contact Footer */}
      <section className="py-20 border-t border-stone-200 dark:border-stone-800">
         <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-black mb-10">Want to join our dealer network?</h3>
            <div className="flex flex-wrap justify-center gap-10">
               <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <a href="tel:+91963071205" className="text-xl font-bold hover:text-primary transition-colors">+91 96307 12105</a>
               </div>
               <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-xl font-bold italic">hariharcropscience@gmail.com</span>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
