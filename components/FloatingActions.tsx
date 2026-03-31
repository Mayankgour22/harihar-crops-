"use client";

import React from "react";
import { Phone, MessageCircle, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  return (
    <div className="fixed right-6 bottom-8 lg:bottom-12 flex flex-col gap-5 z-50">
      <motion.a
        href="https://wa.me/91963071205"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, translateY: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20, delay: 1 }}
        className="relative w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-2xl shadow-[0_20px_40px_rgba(37,211,102,0.3)] group overflow-visible"
      >
        <MessageSquareText className="w-8 h-8" />
        <span className="absolute right-20 bg-white dark:bg-stone-900 text-stone-900 dark:text-white px-5 py-3 rounded-2xl font-black shadow-2xl text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:right-24 transition-all pointer-events-none border border-stone-100 dark:border-stone-800 italic">
          WhatsApp Support
        </span>
        <div className="absolute -inset-1 bg-[#25D366]/20 blur-xl rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
      </motion.a>

      <motion.a
        href="tel:+91963071205"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, translateY: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20, delay: 1.2 }}
        className="relative w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl shadow-[0_20px_40px_rgba(21,128,61,0.3)] group overflow-visible"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-20 bg-white dark:bg-stone-900 text-stone-900 dark:text-white px-5 py-3 rounded-2xl font-black shadow-2xl text-xs uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:right-24 transition-all pointer-events-none border border-stone-100 dark:border-stone-800 italic">
          Call Experts
        </span>
        <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-2xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
      </motion.a>
    </div>
  );
}
