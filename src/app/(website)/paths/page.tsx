"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";

export default function PathsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-forest leading-tight mb-8"
        >
          Healing Paths.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xl text-forest/80 max-w-2xl mx-auto"
        >
          Gentle, compassionate guidance designed to help your nervous system regulate, bringing you back to yourself.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <PremiumCard 
            title="Free 30-Minute Intro Session" 
            description="A gentle conversation to see if we are a good fit. No pressure, no sales pitches. Just a safe space to share where you're at."
            className="bg-[#e5d9c5]/30"
          >
            <Button variant="outline" size="sm">Book Now</Button>
          </PremiumCard>
          
          <PremiumCard 
            title="Mind, Heart & Ease" 
            description="A €100 single session focused on immediate emotional integration and nervous system regulation using breathwork and awareness."
            className="bg-[#f5f1e7]"
          >
            <Button variant="outline" size="sm">Schedule Session</Button>
          </PremiumCard>

          <PremiumCard 
            title="Spiritual Awakening Guidance" 
            description="For those feeling confused, disconnected, or overwhelmed by a spiritual awakening. We ground the experience back into the body."
            className="bg-[#8f9e8b]/20"
          >
            <Button variant="outline" size="sm">Learn More</Button>
          </PremiumCard>

          <PremiumCard 
            title="Four Month Journey" 
            description="A €4,500 immersive container. We work closely together to completely rewire how your nervous system responds to life."
            className="bg-[#2c4c3b]/5 border-none"
          >
            <Button variant="outline" size="sm">Apply Now</Button>
          </PremiumCard>
        </div>
      </section>

      {/* Sound Healing Feature */}
      <section className="py-32 px-6 md:px-12 bg-[#1b2921] text-[#f5f1e7] overflow-hidden relative">
        {/* Animated Waves Placeholder */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8f9e8b]/30 to-transparent"
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Sound Healing</h2>
          <p className="font-sans text-xl text-[#f5f1e7]/70 leading-relaxed mb-12">
            Immerse yourself in frequencies designed to bypass the analytical mind. Sound healing drops you directly into parasympathetic rest, allowing deep emotional release without you having to "do" anything.
          </p>
          <Button variant="secondary" size="lg">Explore Sound Baths</Button>
        </div>
      </section>
    </div>
  );
}
