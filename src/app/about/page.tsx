"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-forest leading-tight mb-8"
          >
            Meet Parvin.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-xl text-forest/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Healing isn't about escaping the human experience. It's learning to embrace it fully. Awareness is more important than effort.
          </motion.p>
        </div>
      </section>

      {/* Timeline / Story Section */}
      <section className="py-20 px-6 md:px-12 bg-[#f5f1e7]">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-24">
            {[
              { year: "2016", title: "The Shift", desc: "A spontaneous spiritual awakening leading to an intense period of unexplainable joy and deep stillness." },
              { year: "India", title: "Seeking & Silence", desc: "Years spent in profound silence, searching for answers and deepening the understanding of the mind." },
              { year: "The Void", title: "Loss of Aliveness", desc: "The profound realization that retreating from the world had inadvertently caused a loss of connection to the human experience." },
              { year: "Integration", title: "Returning Home", desc: "Discovering that true healing comes from integrating the spiritual with the human. Allowing the nervous system to feel safe in the body." },
              { year: "Today", title: "Wellness Family", desc: "Guiding others through their own emotional exhaustion, burnout, and awakenings. A sanctuary for inner peace." }
            ].map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16"
              >
                <div className="md:w-1/3 flex-shrink-0">
                  <h3 className="font-serif text-3xl text-forest/50">{item.year}</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-sans font-medium text-2xl text-forest mb-4">{item.title}</h4>
                  <p className="font-sans text-forest/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-forest mb-8">You are safe here.</h2>
          <Button size="lg">Book a Connection Session</Button>
        </motion.div>
      </section>
    </div>
  );
}
