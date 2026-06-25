"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function PremiumCard({ title, description, className, children }: PremiumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col bg-white/40 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500",
        className
      )}
    >
      <h3 className="font-serif text-2xl text-forest mb-3">{title}</h3>
      <p className="font-sans text-forest/80 leading-relaxed flex-grow">{description}</p>
      {children && <div className="mt-6">{children}</div>}
    </motion.div>
  );
}
