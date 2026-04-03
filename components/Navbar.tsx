"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf, ChevronDown, Phone, Globe, Search } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Products", 
    href: "/products", 
    dropdown: [
      { name: "Biostimulants", href: "/products?category=Biostimulants" },
      { name: "Pesticides", href: "/products?category=Pesticides" },
      { name: "Fungicides", href: "/products?category=Fungicides" },
      { name: "Fertilizers", href: "/products?category=Soluble Fertilizers" }
    ] 
  },
  { name: "Our Work", href: "/our-work" },
  { name: "Results", href: "/results" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 transform ${
        scrolled ? "translate-y-2 px-4 md:px-8" : "translate-y-0 px-0"
      }`}
    >
      <div 
        className={`mx-auto max-w-7xl transition-all duration-500 overflow-hidden ${
          scrolled 
            ? "bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/20 dark:border-white/10 rounded-2xl py-2" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(21,128,61,0.3)] group-hover:rotate-12 transition-transform duration-300">
                  <Image 
                    src="/logo.jpeg" 
                    alt="Harihar Crop Science Logo" 
                    width={48} 
                    height={48} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
              </div>
              <div className={`flex flex-col leading-none ${scrolled ? "text-stone-900 dark:text-white" : "text-white"}`}>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">HARIHAR</span>
                <span className="text-[8px] md:text-[10px] font-serif italic text-secondary tracking-[0.15em] mt-0.5 uppercase">Crop Science</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative px-3 py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <Link 
                      href={item.href}
                      className={`text-sm font-bold flex items-center gap-1 transition-all duration-300 relative group truncate ${
                        scrolled ? "text-stone-700 dark:text-stone-300" : "text-white/90"
                      } hover:text-primary dark:hover:text-primary animate-none border-none bg-transparent p-0`}
                    >
                      {item.name}
                      <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ) : (
                    <Link 
                      href={item.href}
                      className={`text-sm font-bold flex items-center gap-1 transition-all duration-300 relative group truncate ${
                        scrolled ? "text-stone-700 dark:text-stone-300" : "text-white/90"
                      } hover:text-primary dark:hover:text-primary`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )}
                  
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white dark:bg-stone-900 rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.15)] border border-stone-100 dark:border-stone-800 p-2 overflow-hidden z-20"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between px-4 py-3 text-sm font-medium text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-primary rounded-xl transition-all group"
                            >
                              {sub.name}
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <a href="tel:+919630971205" className="relative group px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl transition-all overflow-hidden shadow-lg shadow-primary/20 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Enquire Now
                  <Phone className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mobile Menu Button - RE-ENGINEERED */}
            <button 
              className={`lg:hidden relative p-3 rounded-xl transition-all active:scale-90 z-[3000] ${
                isOpen 
                  ? "bg-primary text-white" 
                  : scrolled 
                    ? "bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white" 
                    : "bg-white/10 backdrop-blur-md text-white border border-white/20"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Nav - RE-ENGINEERED */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[2000] bg-stone-50 dark:bg-stone-950 p-6 pt-28 flex flex-col h-screen overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={item.name}
                >
                  {item.dropdown ? (
                    <div className="py-2">
                      <Link 
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className="text-xs uppercase tracking-widest font-black text-primary mb-3 px-4 flex items-center justify-between"
                      >
                        {item.name}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 p-2 shadow-sm">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-lg font-bold text-stone-800 dark:text-stone-200 border-b border-stone-50 dark:border-stone-800 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-4 text-2xl font-black text-stone-900 dark:text-white border-b border-stone-100 dark:border-stone-900 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <a href="tel:+919630971205" className="w-full py-5 bg-primary text-white text-xl font-black rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                  Enquire Now <Phone className="w-6 h-6" />
                </a>
                <div className="flex items-center justify-center gap-6 mt-10">
                   <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                     <Globe className="w-5 h-5" />
                     <span className="text-sm font-bold uppercase tracking-widest">En</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7"/>
  </svg>
);
