'use client';

import { motion } from "framer-motion";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { Button } from "@/components/ui/Button";

interface Retreat {
  title: string;
  description: string;
  date: string;
  buttonText: string;
}

interface RetreatsData {
  title: string;
  description: string;
  retreatsList: Retreat[];
  testimonial: string;
  testimonialAuthor: string;
}

export function RetreatsUI({ data }: { data: RetreatsData }) {
  const title = data?.title || "Retreats.";
  const description = data?.description || "";
  const retreatsList = data?.retreatsList || [];
  const testimonial = data?.testimonial || "";
  const testimonialAuthor = data?.testimonialAuthor || "";

  const cardBgClasses = [
    "bg-[#f5f1e7]",
    "bg-[#e5d9c5]/30"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl text-forest leading-tight mb-8"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xl text-forest/80 max-w-2xl mx-auto whitespace-pre-line"
        >
          {description}
        </motion.p>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          {retreatsList.map((retreat, index) => (
            <PremiumCard 
              key={index}
              title={retreat.title} 
              description={retreat.description}
              className={cardBgClasses[index % cardBgClasses.length]}
            >
              <div className="flex items-center space-x-4">
                <span className="font-sans text-sm tracking-widest text-forest/60">
                  {retreat.date}
                </span>
                <Button variant="outline" size="sm">
                  {retreat.buttonText || "Join Waitlist"}
                </Button>
              </div>
            </PremiumCard>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {testimonial && (
        <section className="py-32 px-6 bg-[#8f9e8b]/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-forest mb-16">Stories of Integration</h2>
            <div className="space-y-12">
              <motion.blockquote 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-sans text-xl text-forest italic leading-relaxed whitespace-pre-line"
              >
                {testimonial}
                <footer className="mt-4 text-sm font-sans not-italic tracking-widest uppercase text-forest/60">
                  {testimonialAuthor}
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
