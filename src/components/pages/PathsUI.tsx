'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PremiumCard } from "@/components/ui/PremiumCard";

interface Service {
  title: string;
  description: string;
  buttonText: string;
}

interface PathsData {
  title: string;
  description: string;
  services: Service[];
  soundHealingTitle: string;
  soundHealingDescription: string;
  soundHealingButtonText: string;
}

export function PathsUI({ data }: { data: PathsData }) {
  // Safe fallbacks
  const title = data?.title || "Healing Paths.";
  const description = data?.description || "";
  const services = data?.services || [];
  const soundHealingTitle = data?.soundHealingTitle || "Sound Healing";
  const soundHealingDescription = data?.soundHealingDescription || "";
  const soundHealingButtonText = data?.soundHealingButtonText || "Explore";

  // We map the background colors and details based on default structure
  const cardBgClasses = [
    "bg-[#e5d9c5]/30",
    "bg-[#f5f1e7]",
    "bg-[#8f9e8b]/20",
    "bg-[#2c4c3b]/5 border-none"
  ];

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

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <PremiumCard 
              key={index}
              title={service.title} 
              description={service.description}
              className={cardBgClasses[index % cardBgClasses.length]}
            >
              <Button variant="outline" size="sm">
                {service.buttonText || "Learn More"}
              </Button>
            </PremiumCard>
          ))}
        </div>
      </section>

      {/* Sound Healing Feature */}
      <section className="py-32 px-6 md:px-12 bg-[#1b2921] text-[#f5f1e7] overflow-hidden relative">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8f9e8b]/30 to-transparent"
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">{soundHealingTitle}</h2>
          <p className="font-sans text-xl text-[#f5f1e7]/70 leading-relaxed mb-12 whitespace-pre-line">
            {soundHealingDescription}
          </p>
          <Button variant="secondary" size="lg">{soundHealingButtonText}</Button>
        </div>
      </section>
    </div>
  );
}
