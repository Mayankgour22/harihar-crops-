"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  User,
  GraduationCap
} from "lucide-react";

const CAREER_INFO = {
  email: "hariharcropscience@gmail.com",
  location: "Gujarat, India",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM"
};

export default function CareerPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", phone: "", position: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 selection:bg-primary/30 selection:text-primary">
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-0" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section */}
          <section className="mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Join Our Team</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-stone-900 dark:text-white mb-8 leading-[0.9] tracking-tighter">
                Build your <br />
                <span className="text-primary italic font-serif">Future.</span>
              </h1>
              <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto italic leading-relaxed">
                We are always looking for passionate individuals to help us revolutionize Indian agriculture. Join Harihar Crop Science today.
              </p>
            </motion.div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Quick Action Button - Direct Email */}
              <motion.a 
                href={`mailto:${CAREER_INFO.email}?subject=Job Application at Harihar Crop Science`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block p-8 bg-stone-900 dark:bg-white text-white dark:text-stone-900 rounded-[3rem] shadow-2xl transition-all hover:scale-[1.02] active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/10 dark:bg-stone-900/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                         <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-widest text-white/50 dark:text-stone-900/50 mb-1">Direct Apply</p>
                        <p className="text-2xl font-black italic">Email Your Resume</p>
                      </div>
                   </div>
                   <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform text-white dark:text-stone-900" />
                </div>
              </motion.a>

              {/* Contact Detail Cards */}
              <div className="grid grid-cols-1 gap-4">
                <DetailCard 
                  icon={<Mail className="w-6 h-6" />}
                  label="HR Email"
                  value={CAREER_INFO.email}
                  subValue="Send your resume/CV here"
                  href={`mailto:${CAREER_INFO.email}?subject=Career Inquiry`}
                />
                <DetailCard 
                  icon={<MapPin className="w-6 h-6" />}
                  label="Office Location"
                  value={CAREER_INFO.location}
                  subValue="Manufacturing unit & HQ"
                />
                <DetailCard 
                  icon={<Clock className="w-6 h-6" />}
                  label="Working Hours"
                  value={CAREER_INFO.hours}
                  subValue="Excluding public holidays"
                />
              </div>
            </div>

            {/* Career Application Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-stone-900 rounded-[4rem] p-8 md:p-16 shadow-2xl border border-stone-100 dark:border-stone-800 relative overflow-hidden"
              >
                {/* Form Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-3xl font-black text-stone-900 dark:text-white mb-10 italic">Apply Online</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="Your Name" 
                      name="name" 
                      placeholder="Enter Full Name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                    <InputField 
                      label="Mobile Number" 
                      name="phone" 
                      placeholder="+91-0000000000" 
                      type="tel"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField 
                      label="Email Address" 
                      name="email" 
                      placeholder="example@mail.com" 
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-4">Position Applying For</label>
                      <select
                        name="position"
                        value={formState.position}
                        onChange={handleInputChange}
                        required
                        className="w-full p-6 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-3xl outline-none focus:border-primary transition-all font-medium text-stone-900 dark:text-white appearance-none"
                      >
                        <option value="" disabled>Select a position</option>
                        <option value="Agronomist">Agronomist</option>
                        <option value="Sales / Distributor Coordinator">Sales / Distributor Coordinator</option>
                        <option value="Marketing & Brand Strategy">Marketing & Brand Strategy</option>
                        <option value="Production & Quality Control">Production & Quality Control</option>
                        <option value="General Check / Open Application">General Check / Open Application</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end mb-1">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-4">Message / Cover Letter (Optional)</label>
                      <span className="text-[10px] text-stone-400 font-medium">You can paste a link to your Resume (Drive/LinkedIn)</span>
                    </div>
                    <textarea 
                      name="message"
                      placeholder="Tell us about yourself or provide a link to your CV..."
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      className="w-full p-6 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-3xl outline-none focus:border-primary transition-all font-medium text-stone-900 dark:text-white"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] ${
                      isSubmitting 
                        ? "bg-stone-200 text-stone-400 cursor-not-allowed" 
                        : "bg-primary hover:bg-primary-hover text-white shadow-xl shadow-primary/20"
                    }`}
                  >
                    {isSubmitting ? (
                      "Submitting Application..."
                    ) : (
                      <>Submit Application <Send className="w-6 h-6" /></>
                    )}
                  </button>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 p-6 rounded-3xl flex items-center gap-4 border border-emerald-100 dark:border-emerald-800"
                      >
                        <CheckCircle2 className="w-6 h-6" />
                        <span className="font-bold italic">Application sent successfully. We will review and contact you.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

function DetailCard({ icon, label, value, subValue, href }: { icon: React.ReactNode, label: string, value: string, subValue: string, href?: string }) {
  const content = (
    <div className="p-8 bg-white dark:bg-stone-900 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 transition-all hover:border-primary/30 hover:shadow-xl group">
      <div className="flex gap-6 items-center">
        <div className="w-14 h-14 bg-stone-50 dark:bg-stone-950 text-stone-400 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 mb-1">{label}</p>
          <p className="text-xl md:text-2xl font-black text-stone-900 dark:text-white tracking-tight">{value}</p>
          <p className="text-xs font-bold text-primary mt-1 italic">{subValue}</p>
        </div>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : <div className="block">{content}</div>;
}

function InputField({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-4">{label}</label>
      <input 
        {...props}
        className="w-full p-6 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-3xl outline-none focus:border-primary transition-all font-medium text-stone-900 dark:text-white"
      />
    </div>
  );
}
