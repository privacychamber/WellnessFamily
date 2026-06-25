"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { urlFor } from "@/sanity/lib/image";

export function HomepageUI({ data }: { data: any }) {
  // Use Sanity data or fallback to defaults
  const headline = data?.heroHeadline || "You don't\nhave to hold\neverything\n";
  const scriptWord = data?.heroScriptWord || "inside.";
  const subtitle = data?.heroSubtitle || "A Global Wellness Movement\nfor Mind, Body & Inner Peace";
  const imageUrl = data?.heroImage ? urlFor(data.heroImage).url() : "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=2000";

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
            <div className="w-12 h-12 border border-forest rounded-full flex items-center justify-center mb-4">
               <span className="text-forest text-xs">WF</span>
            </div>
            <h2 className="text-forest tracking-[0.2em] text-sm md:text-base font-medium mb-2 uppercase">Wellness Family</h2>
            <p className="text-forest/70 tracking-[0.1em] text-xs max-w-xs md:max-w-sm uppercase text-center md:text-left leading-relaxed whitespace-pre-line">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest leading-[1.1] mb-6 whitespace-pre-line">
              {headline}
              <span className="font-script text-6xl md:text-7xl lg:text-8xl text-olive relative -left-2 block mt-2">{scriptWord}</span>
            </h1>
            
            <div className="w-8 h-px bg-forest/30 mb-8" />
            
            <p className="font-sans text-sm tracking-[0.2em] text-forest mb-12 uppercase leading-loose">
              Release. Heal. Return.<br/>To You.
            </p>

            <div className="w-16 h-8 text-olive opacity-80 mb-12">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
               </svg>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Image) */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full bg-sand">
          <div className="absolute inset-0 bg-[#d8d0bc] object-cover mix-blend-multiply flex items-center justify-center">
            <img 
              src={imageUrl} 
              alt="Hero image"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/20 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-background relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex flex-col items-center"
          >
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-olive mb-6">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
             </svg>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">
              You don&apos;t need fixing.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-forest/80 leading-relaxed mb-20 max-w-2xl mx-auto"
          >
            Most healing approaches ask us to become someone new. We believe healing begins when nothing needs to be forced. When your nervous system finally feels safe enough to soften.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Awareness", desc: "Observing without judgment.", delay: 0.3 },
              { title: "Compassion", desc: "Holding space for what is.", delay: 0.4 },
              { title: "Integration", desc: "Returning home to the body.", delay: 0.5 }
            ].map((pillar) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay }}
                className="flex flex-col items-center"
              >
                <div className="w-px h-12 bg-forest/20 mb-6" />
                <h3 className="font-sans font-medium tracking-[0.1em] uppercase text-sm text-forest mb-3">{pillar.title}</h3>
                <p className="font-sans text-forest/70 text-sm leading-relaxed max-w-[200px]">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 px-4 md:px-8 bg-beige/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4">
              Join the <span className="font-script text-5xl text-gold">Movement</span>
            </h2>
            <p className="font-sans tracking-[0.1em] text-xs uppercase text-forest/70">
              @wellnessfamily
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80&w=800"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="aspect-square relative overflow-hidden group cursor-pointer"
              >
                <img 
                  src={src} 
                  alt="Instagram feed" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-sand">
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                   </svg>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-sand">
              Follow Us
            </Button>
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
