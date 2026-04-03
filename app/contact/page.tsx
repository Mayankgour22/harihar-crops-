"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from "lucide-react";

// Support Numbers & Links
const CONTACT_INFO = {
  primaryPhone: "+91 96309 71205",
  whatsappLink: "https://wa.me/919630971205?text=Hello%20Harihar%20Crop%20Science%2C%20I%20have%20an%20inquiry.",
  email: "hariharcropscience@gmail.com",
  location: "Gujarat, India",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM"
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary italic">Connect with Us</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-stone-900 dark:text-white mb-8 leading-[0.9] tracking-tighter">
                Grow with <br />
                <span className="text-primary italic font-serif">Confidence.</span>
              </h1>
              <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto italic leading-relaxed">
                Whether you're a farmer seeking advice, a distributor wanting to partner, or an expert with a query — we're here to listen and help.
              </p>
            </motion.div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Quick Action Button - WhatsApp */}
              <motion.a 
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block p-8 bg-[#25D366] text-white rounded-[3rem] shadow-2xl shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                         <WhatsAppIcon className="w-10 h-10" />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-widest text-white/80 mb-1">24/7 Support</p>
                        <p className="text-3xl font-black italic">WhatsApp Help</p>
                      </div>
                   </div>
                   <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.a>

              {/* Contact Detail Cards */}
              <div className="grid grid-cols-1 gap-4">
                <DetailCard 
                  icon={<Phone className="w-6 h-6" />}
                  label="Phone Support"
                  value={CONTACT_INFO.primaryPhone}
                  subValue="Call for immediate assistance"
                  href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, '')}`}
                />
                <DetailCard 
                  icon={<Mail className="w-6 h-6" />}
                  label="Email Inquiries"
                  value={CONTACT_INFO.email}
                  subValue="We reply within 24 hours"
                  href={`mailto:${CONTACT_INFO.email}`}
                />
                <DetailCard 
                  icon={<MapPin className="w-6 h-6" />}
                  label="Registered Office"
                  value={CONTACT_INFO.location}
                  subValue="Manufacturing in Gujarat"
                />
                <DetailCard 
                  icon={<Clock className="w-6 h-6" />}
                  label="Working Hours"
                  value={CONTACT_INFO.hours}
                  subValue="Excluding public holidays"
                />
              </div>
            </div>

            {/* Email Form Column */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-stone-900 rounded-[4rem] p-8 md:p-16 shadow-2xl border border-stone-100 dark:border-stone-800 relative overflow-hidden"
              >
                {/* Form Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-3xl font-black text-stone-900 dark:text-white mb-10 italic">Send us a Message</h2>
                
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
                  
                  <InputField 
                    label="Email Address" 
                    name="email" 
                    placeholder="example@mail.com" 
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                  />

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 ml-4">Message</label>
                    <textarea 
                      name="message"
                      placeholder="How can we help you?"
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-6 bg-stone-50 dark:bg-stone-950 border border-stone-100 dark:border-stone-800 rounded-3xl outline-none focus:border-primary transition-all font-medium text-stone-900 dark:text-white"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-[0.98] ${
                      isSubmitting 
                        ? "bg-stone-200 text-stone-400 cursor-not-allowed" 
                        : "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>Send Message <Send className="w-6 h-6" /></>
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
                        <span className="font-bold italic">Thank you! Your inquiry has been sent successfully.</span>
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
