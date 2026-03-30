"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Truck, ShieldCheck, Factory, Award, TrendingUp } from "lucide-react";

const stats = [
  { label: "Products Offered", value: "40+", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Farmers Reached", value: "15,000+", icon: Users, color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Distributors Network", value: "500+", icon: Truck, color: "text-lime-500", bg: "bg-lime-500/10" },
  { label: "Manufacturing Facilities", value: "05+", icon: Factory, color: "text-blue-500", bg: "bg-blue-500/10" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col p-8 bg-stone-50 dark:bg-stone-800/30 rounded-[2rem] border border-stone-100 dark:border-stone-800/50 hover:bg-white dark:hover:bg-stone-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <stat.icon className="w-8 h-8" />
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-black text-stone-900 dark:text-white tracking-tighter">
                  {stat.value}
                </span>
                <TrendingUp className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <span className="text-sm font-bold text-stone-500 dark:text-stone-400 tracking-widest uppercase italic">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
