"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Play, CheckCircle2, User, Sprout } from "lucide-react";

const successStories = [
  {
    id: 1,
    farmerName: "Rajesh Kumar",
    location: "Anand, Gujarat",
    problem: "Severe yellowing of cotton leaves due to unknown pest infestation, resulting in 40% crop loss.",
    solution: "Our experts visited the field, identified the specific pest, and recommended a customized dosage of 'Harihar Suraksha' fungicide and biostimulants.",
    result: "Complete recovery of the crop within 15 days. Final yield increased by 25% compared to the previous year.",
    image: "/images/result-1.png",
    videoUrl: "https://www.youtube.com/@Hariharcropscience"
  },
  {
    id: 2,
    farmerName: "Suresh Patel",
    location: "Mehsana, Gujarat",
    problem: "Stunted growth in wheat crops due to poor soil nutrition and lack of micronutrients.",
    solution: "Soil analysis followed by the application of 'Harihar Growth Booster' and specific soluble fertilizers designed for Gujarat's soil.",
    result: "Healthy, vibrant green crops with significant grain weight improvement. Suresh reported his best harvest in 5 years.",
    image: "/images/result-2.png",
    videoUrl: "https://www.youtube.com/@Hariharcropscience"
  },
  {
    id: 3,
    farmerName: "Mahendra Singh",
    location: "Junagadh, Gujarat",
    problem: "Whitefly attack on groundnut crops that traditional pesticides failed to control.",
    solution: "Intelligent application of our advanced pesticide range and training on proper spraying techniques provided by our field officer.",
    result: "Elimination of whitefly within 48 hours. The farmer saved his entire investment and secured a high-market price for the quality produce.",
    image: "/images/result-3.png",
    videoUrl: "https://www.youtube.com/@Hariharcropscience"
  }
];

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 selection:bg-primary/30 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-24 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-8">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Real Impact, Real People</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-stone-900 dark:text-white mb-8 leading-[0.9] tracking-tighter">
              Field Stories & <br />
              <span className="text-primary italic font-serif">Results.</span>
            </h1>
            <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto leading-relaxed">
              We don't just sell products; we solve problems. See how Harihar Crop Science is transforming the lives of farmers across India with expert guidance and superior science.
            </p>
          </motion.div>
        </section>

        {/* Success Stories Grid */}
        <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col gap-24">
            {successStories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-12 lg:gap-20`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2 relative group">
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-stone-900 transition-transform duration-700 group-hover:scale-[1.02]">
                    <Image 
                      src={story.image} 
                      alt={story.farmerName} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* YouTube Play Overlay */}
                    <a 
                      href={story.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"
                    >
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-600/40">
                         <Play className="w-10 h-10 fill-current ml-1" />
                      </div>
                    </a>
                    
                    <div className="absolute bottom-8 left-8 right-8 text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                       <p className="text-2xl font-black italic mb-1">{story.farmerName}</p>
                       <p className="text-sm font-bold text-white/80 uppercase tracking-widest">{story.location}</p>
                    </div>
                  </div>
                  
                  {/* Background Decoration */}
                  <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-primary/10 rounded-[3rem] blur-3xl" />
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-white dark:bg-stone-900 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-800 flex items-center justify-center text-primary">
                         <User className="w-8 h-8" />
                      </div>
                      <div>
                         <p className="text-stone-900 dark:text-white font-black text-2xl tracking-tight">{story.farmerName}</p>
                         <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">{story.location}</p>
                      </div>
                   </div>

                   <div className="space-y-10 group">
                      <div className="relative pl-8 border-l-4 border-red-500 transition-all hover:border-l-8">
                         <p className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">The Problem</p>
                         <p className="text-lg text-stone-600 dark:text-stone-400 font-medium leading-relaxed italic">
                            "{story.problem}"
                         </p>
                      </div>

                      <div className="relative pl-8 border-l-4 border-primary transition-all hover:border-l-8">
                         <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Our Solution</p>
                         <p className="text-lg text-stone-600 dark:text-stone-400 font-medium leading-relaxed">
                            {story.solution}
                         </p>
                      </div>

                      <div className="relative pl-8 border-l-4 border-secondary transition-all hover:border-l-8">
                         <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">The Outcome</p>
                         <p className="text-2xl text-stone-900 dark:text-white font-black leading-tight italic">
                            "{story.result}"
                         </p>
                      </div>
                      
                      <div className="pt-6">
                        <a 
                          href={story.videoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-4 text-stone-900 dark:text-white font-black italic hover:text-primary transition-colors group/link"
                        >
                           Watch Case Study on YouTube
                           <div className="w-10 h-10 bg-red-600/10 text-red-600 rounded-full flex items-center justify-center group-hover/link:bg-red-600 group-hover/link:text-white transition-all group-hover/link:scale-110">
                              <Play className="w-5 h-5 fill-current" />
                           </div>
                        </a>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* YouTube Call to Action */}
        <section className="container mx-auto px-6 mb-24">
           <div className="bg-stone-900 text-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden text-center shadow-3xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ef444433_0%,_transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#15803d33_0%,_transparent_60%)]" />
              
              <div className="relative z-10">
                 <Play className="w-20 h-20 text-red-600 mx-auto mb-8 animate-pulse" />
                 <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter italic">
                    Subscribe to our <br />
                    <span className="text-primary font-serif">YouTube Journey.</span>
                 </h2>
                 <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
                    We post regular field visit videos, farmer testimonials, and product demonstration guides to help our community grow together.
                 </p>
                 <a 
                  href="https://www.youtube.com/@Hariharcropscience" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 px-12 py-6 bg-red-600 hover:bg-red-700 text-white font-black text-xl rounded-3xl shadow-2xl shadow-red-600/40 transition-all active:scale-95 group"
                 >
                    Visit Channel <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                 </a>
              </div>
           </div>
        </section>

        {/* Search/Query Section */}
        <section className="container mx-auto px-6 text-center">
            <h3 className="text-2xl font-black mb-8 italic">Facing a similar issue with your crops?</h3>
            <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-3">
                   Consult an Expert <MessageSquare className="w-5 h-5" />
                </button>
            </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
