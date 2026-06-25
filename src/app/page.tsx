"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        
        {/* Left Column (Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-20 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16 flex flex-col items-center md:items-start"
          >
            {/* Logo Placeholder */}
            <div className="w-12 h-12 border border-forest rounded-full flex items-center justify-center mb-4">
               <span className="text-forest text-xs">WF</span>
            </div>
            <h2 className="text-forest tracking-[0.2em] text-sm md:text-base font-medium mb-2 uppercase">Wellness Family</h2>
            <p className="text-forest/70 tracking-[0.1em] text-xs max-w-xs md:max-w-sm uppercase text-center md:text-left leading-relaxed">
              A Global Wellness Movement<br/>for Mind, Body & Inner Peace
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest leading-[1.1] mb-6">
              You don&apos;t<br />have to hold<br />everything<br />
              <span className="font-script text-6xl md:text-7xl lg:text-8xl text-olive relative -left-2 block mt-2">inside.</span>
            </h1>
            
            <div className="w-8 h-px bg-forest/30 mb-8" />
            
            <p className="font-sans text-sm tracking-[0.2em] text-forest mb-12 uppercase leading-loose">
              Release. Heal. Return.<br/>To You.
            </p>

            {/* Decorative Leaves/Icon Placeholder */}
            <div className="w-16 h-8 text-olive opacity-80 mb-12">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
               </svg>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full bg-sand">
          {/* Placeholder for the hero image (woman sitting with bowls) */}
          <div className="absolute inset-0 bg-[#d8d0bc] object-cover mix-blend-multiply flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=2000" 
              alt="Woman sitting peacefully"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          {/* Gradient overlay to blend image edge into the background on mobile if needed */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/20 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Footer Banner (Dark Green) */}
      <section className="bg-forest text-beige py-12 px-6 flex flex-col items-center justify-center text-center relative z-20">
        <div className="w-6 h-6 mb-6">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold w-full h-full">
             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
           </svg>
        </div>
        <p className="font-sans tracking-[0.2em] text-xs md:text-sm uppercase mb-4 text-beige/90">
          This is a space to exhale, release & return to you.
        </p>
        <div className="flex items-center gap-4 w-full max-w-md mx-auto opacity-70">
          <div className="h-px bg-gold flex-1" />
          <p className="font-sans tracking-[0.2em] text-xs md:text-sm uppercase text-gold">
            You are safe here.
          </p>
          <div className="h-px bg-gold flex-1" />
        </div>
      </section>

    </div>
  );
}
