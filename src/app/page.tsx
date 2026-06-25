"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder for Cinematic Video/Image background */}
        <div className="absolute inset-0 bg-[#e5d9c5]/20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-forest leading-tight mb-8"
          >
            Healing begins the moment you no longer have to carry everything alone.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl text-forest/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Through sound healing, breathwork, yoga, emotional integration, and compassionate guidance, Wellness Family helps people reconnect with themselves naturally.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button size="lg">Book Your Free Intro Session</Button>
            <Button variant="ghost" size="lg">Explore Healing Paths</Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-forest/50"
        >
          <span className="text-xs uppercase tracking-widest font-sans">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-forest/50 to-transparent" />
        </motion.div>
      </section>

      {/* Emotional Recognition Section */}
      <section className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-forest text-center mb-20"
          >
            Maybe you&apos;ve been feeling...
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PremiumCard 
              title="Exhausted" 
              description="&quot;I'm always tired, even when I sleep. I've lost my spark.&quot;" 
              className="bg-[#f5f1e7]"
            />
            <PremiumCard 
              title="Overwhelmed" 
              description="&quot;I can't switch my mind off. I've tried everything.&quot;" 
              className="bg-[#e5d9c5]/50"
            />
            <PremiumCard 
              title="Disconnected" 
              description="&quot;I smile, but I don't really feel alive anymore.&quot;" 
              className="bg-[#8f9e8b]/20"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#f5f1e7]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-forest mb-10"
          >
            You don&apos;t need fixing.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl text-forest/80 leading-relaxed mb-20"
          >
            Most healing approaches ask us to become someone new. We believe healing begins when nothing needs to be forced. When your nervous system finally feels safe enough to soften.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Awareness", desc: "Observing without judgment." },
              { title: "Compassion", desc: "Holding space for what is." },
              { title: "Integration", desc: "Returning home to the body." }
            ].map((pillar, i) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border border-forest/20 flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-forest">{i + 1}</span>
                </div>
                <h3 className="font-sans font-medium text-xl text-forest mb-3">{pillar.title}</h3>
                <p className="font-sans text-forest/70">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-background flex flex-col items-center justify-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl text-forest mb-8 leading-tight max-w-3xl"
        >
          Maybe nothing is wrong with you.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-xl text-forest/70 mb-12 max-w-xl"
        >
          Maybe you&apos;ve simply been carrying too much for too long.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button size="lg">Book Your Free Intro Session</Button>
        </motion.div>
      </section>
    </div>
  );
}
