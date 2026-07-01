"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        
        {/* Left Column (Text & Features) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-20 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Logo Placeholder */}
            <div className="w-12 h-12 border border-forest rounded-full flex items-center justify-center mb-4">
               <span className="text-forest text-xs">WF</span>
            </div>
            <h2 className="text-forest tracking-[0.2em] text-sm md:text-base font-medium mb-2 uppercase">Wellness Family</h2>
            <p className="text-forest/70 tracking-[0.1em] text-xs max-w-xs uppercase leading-relaxed">
              A Global Wellness Movement<br/>for Mind, Body & Inner Peace
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6 text-forest/40">
              <div className="h-px bg-forest/30 w-12" />
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gold">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="h-px bg-forest/30 w-12" />
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest leading-none mb-2">
              Meet
              <span className="font-script text-6xl md:text-7xl lg:text-8xl text-gold block mt-2 -ml-4">Parvin</span>
            </h1>
            
            <p className="font-sans text-lg text-forest/90 mt-8 max-w-sm leading-relaxed">
              Dedicated to helping you release, heal and return to your true self.
            </p>
          </motion.div>

          {/* Vertical Feature List */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: "M2 12h4l2-8 4 16 4-16 2 8h4", label: "Emotional Release Facilitator" },
              { icon: "M12 2L2 22h20L12 2z", label: "Sound Healing Practitioner" },
              { icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z", label: "Compassionate Guide for Inner Transformation" },
              { icon: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-4c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z", label: "Creating Safe Spaces for Deep Healing" },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-forest text-beige flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <p className="font-sans text-sm tracking-wider uppercase text-forest/90 leading-tight">
                  {feature.label.split(' ').map((word, j, arr) => (
                    <span key={j}>
                      {word}{j === 1 && arr.length > 3 ? <br/> : ' '}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
          {/* Placeholder for Parvin's Portrait */}
          <div className="absolute inset-0 bg-[#d8d0bc] flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=2000" 
              alt="Portrait of Parvin"
              className="w-full h-full object-cover"
            />
          </div>
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
