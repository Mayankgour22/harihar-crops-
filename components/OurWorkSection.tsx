"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Factory, ShoppingCart, Microscope, Truck, ArrowUpRight } from "lucide-react";

const workCategories = [
  {
    id: "manufacturing",
    title: "Advanced Manufacturing",
    description: "State-of-the-art facilities producing eco-friendly agricultural solutions with precision and care.",
    image: "/agri_factory_interior_1774947009707.png",
    icon: Factory,
    color: "from-emerald-500 to-teal-700",
  },
  {
    id: "selling",
    title: "Global Distribution",
    description: "Reaching millions of farmers across India through a robust network of trusted dealers and sub-dealers.",
    image: "/agri_selling_point_1774947049551.png",
    icon: ShoppingCart,
    color: "from-amber-400 to-orange-600",
  },
  {
    id: "bottling",
    title: "Quality Packaging",
    description: "Ensuring product integrity from factory floor to farmer's hands with premium, leak-proof packaging.",
    image: "/agri_medicine_bottles_1774947032205.png",
    icon: Microscope,
    color: "from-blue-500 to-indigo-700",
  },
];

export default function OurWorkSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-stone-50 dark:bg-stone-950">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">From Lab to Field</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 dark:text-white leading-[0.95] tracking-tighter">
              Real Impact, <span className="text-primary italic font-serif">Every Step</span> of the Way.
            </h2>
          </div>
          <Link 
            href="/our-work" 
            className="group flex items-center gap-3 text-lg font-black text-stone-600 dark:text-stone-400 hover:text-primary transition-colors italic whitespace-nowrap"
          >
            Explore Our full Workflow
            <div className="w-12 h-12 rounded-full border-2 border-stone-200 dark:border-stone-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workCategories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-stone-200 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent group-hover:via-stone-950/60 transition-all duration-500" />
              
              <div className="absolute top-8 left-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-12 transition-transform duration-500`}>
                  <item.icon className="w-7 h-7" />
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-2xl font-black text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-300 font-medium text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.description}
                </p>
                <div className="flex h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
}
