"use client";

import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Button } from "@/components/ui/Button";

export default function RetreatsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-forest leading-tight mb-8"
        >
          Retreats.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xl text-forest/80 max-w-2xl mx-auto"
        >
          Step away from the noise. Our luxury retreats are designed to offer profound rest, human connection, and emotional safety in nature.
        </motion.p>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          
          <PremiumCard 
            title="The Silent Mountain Retreat" 
            description="A 5-day immersive experience in the Swiss Alps. Focus on silence, breathwork, and nervous system regulation. Luxury private cabins, organic meals, and daily guided integration."
            className="bg-[#f5f1e7]"
          >
            <div className="flex items-center space-x-4">
              <span className="font-sans text-sm tracking-widest text-forest/60">OCTOBER 2026</span>
              <Button variant="outline" size="sm">Join Waitlist</Button>
            </div>
          </PremiumCard>

          <PremiumCard 
            title="Ocean Renewal" 
            description="A 7-day gathering on the coast of Portugal. Blending gentle yoga, intensive sound healing baths, and community connection. Relearn how to feel joy without guilt."
            className="bg-[#e5d9c5]/30"
          >
            <div className="flex items-center space-x-4">
              <span className="font-sans text-sm tracking-widest text-forest/60">MARCH 2027</span>
              <Button variant="outline" size="sm">Join Waitlist</Button>
            </div>
          </PremiumCard>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#8f9e8b]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-forest mb-16">Stories of Integration</h2>
          <div className="space-y-12">
            <motion.blockquote 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-xl text-forest italic leading-relaxed"
            >
              "I didn't know how exhausted I was until I finally stopped. Wellness Family didn't try to fix me; they just gave me the absolute safest place to finally rest."
              <footer className="mt-4 text-sm font-sans not-italic tracking-widest uppercase text-forest/60">— Sarah M.</footer>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
