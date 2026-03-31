"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Mail, Phone, MapPin, Share2, Globe, ArrowRight } from "lucide-react";

// Custom SVG Icons for missing Lucide brand icons
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.2-18 11.6 0 0 3.5-.1 5.4-2.1-3 0-4.4-1.7-4.8-4 0 0 1.5.1 2.2-.1-3.1-.9-4.1-3.8-3.9-6 0 0 1.4.8 2.3.8-3.1-2.1-2.3-5.7-1-7 0 0 3.7 4.5 9 5 0-1 0-4 3-5s6 0 7 3c0 0 1.5 0 2.5-1z"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-emerald-500 to-secondary" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
              <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Leaf className="text-white w-7 h-7" />
              </div>
              <span className="text-3xl font-black tracking-tighter">HARIHAR<span className="text-secondary italic font-serif">CROPS</span></span>
            </Link>
            <p className="text-stone-400 leading-relaxed mb-10 text-lg font-medium opacity-80">
              Pioneering the next wave of agricultural innovation in India. Sustainability, science, and success for every farmer.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-primary hover:text-white rounded-2xl flex items-center justify-center transition-all duration-300 border border-white/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-10 italic">Quick Explore</h4>
            <ul className="space-y-5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Our Work", href: "/our-work" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-3 text-stone-400 hover:text-white transition-all text-sm font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-800 group-hover:bg-primary group-hover:scale-150 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-10 italic">Product Range</h4>
            <ul className="space-y-5">
              {["Biostimulants", "Pesticides", "Fungicides", "Herbicides", "Soluble Fertilizers", "Growth Regulators"].map((link) => (
                <li key={link}>
                  <Link href="#" className="group flex items-center gap-3 text-stone-400 hover:text-white transition-all text-sm font-bold">
                    <ArrowRight className="w-4 h-4 text-stone-800 group-hover:text-primary transition-all group-hover:translate-x-1" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-10 italic">Global reach</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><MapPin className="w-6 h-6" /></div>
                <div>
                  <p className="text-stone-300 text-sm font-bold mb-1">Corporate HQ</p>
                  <p className="text-stone-500 text-xs leading-relaxed font-medium capitalize">Indore, Madhya Pradesh, India</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-stone-300 text-sm font-bold mb-1">Expert Helpline</p>
                  <p className="text-stone-500 text-xs font-medium">+91-XXXXXXXXXX</p>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-stone-300 text-sm font-bold mb-1">Business Inquiries</p>
                  <p className="text-stone-500 text-xs font-medium">info@hariharcrops.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">
            &copy; {new Date().getFullYear()} Harihar Crops Science Pvt Ltd.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-primary transition-colors italic line-through decoration-secondary/40 decoration-2">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 hover:text-primary transition-colors italic line-through decoration-secondary/40 decoration-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
